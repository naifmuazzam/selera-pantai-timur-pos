import { useState, useRef, useEffect } from "react"

const badgeColors = {
  "Nasi Kerabu": "text-blue-700",
  "Nasi Air": "text-green-700",
  "Mee": "text-purple-700",
  "Meggi Celup": "text-orange-700",
  "Kerabu Meggi": "text-red-700",
  "Minuman Panas": "text-rose-700",
  "Minuman Sejuk": "text-cyan-700",
  "Minuman Special": "text-teal-700",
}

const buildPdfFile = async (node) => {
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ])

  const original = node
  const clone = original.cloneNode(true)
  const wrapper = document.createElement("div")
  wrapper.style.cssText = "position:fixed;left:0;top:0;z-index:-1;background:white;width:520px;padding:0;"
  wrapper.appendChild(clone)
  document.body.appendChild(wrapper)

  const canvas = await html2canvas(clone, {
    scale: 1.5,
    backgroundColor: "#ffffff",
    logging: false,
  })

  document.body.removeChild(wrapper)

  const pdf = new jsPDF({ unit: "mm", format: "a4" })
  const margin = 10
  const pageW = 210 - margin * 2
  const pageH = 297 - margin * 2
  const ratio = pageW / canvas.width
  const totalH = canvas.height * ratio
  const pages = Math.ceil(totalH / pageH)

  for (let i = 0; i < pages; i++) {
    if (i > 0) pdf.addPage()

    const yOffsetPX = Math.round((i * pageH) / ratio)
    const sliceHPX = Math.min(canvas.height - yOffsetPX, Math.round(pageH / ratio))

    const temp = document.createElement("canvas")
    temp.width = canvas.width
    temp.height = sliceHPX
    temp.getContext("2d").drawImage(canvas, 0, yOffsetPX, canvas.width, sliceHPX, 0, 0, canvas.width, sliceHPX)

    pdf.addImage(temp.toDataURL("image/png"), "PNG", margin, margin, pageW, sliceHPX * ratio)
  }

  const pdfBlob = pdf.output("blob")
  return new File([pdfBlob], "receipt-selera-pantai-timur.pdf", {
    type: "application/pdf",
  })
}

const ReceiptBayaran = ({ cart, total, onClose }) => {
  const [sharing, setSharing] = useState(false)
  const [ready, setReady] = useState(false)
  const [shareFile, setShareFile] = useState(null)
  const receiptRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const file = await buildPdfFile(receiptRef.current)
      if (!cancelled) {
        setShareFile(file)
        setReady(true)
      }
    })().catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const handleShare = async () => {
    setSharing(true)
    try {
      const file = shareFile

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "Receipt - Selera Pantai Timur" })
          return
        } catch {
          return
        }
      }
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Receipt - Selera Pantai Timur",
            text: `Resit Selera Pantai Timur - RM${total.toFixed(2)}`,
            url: window.location.href,
          })
          return
        } catch {
          return
        }
      }
      const url = URL.createObjectURL(file)
      const a = document.createElement("a")
      a.href = url
      a.download = "receipt-selera-pantai-timur.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch {
    } finally {
      setSharing(false)
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto">
          <div ref={receiptRef} className="receipt-print p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Selera Pantai Timur™</h2>
              <p className="text-xs text-gray-500">Thank you for your order!</p>
            </div>

            <div className="border-t-2 border-dashed border-gray-400 my-4" />

            <div className="w-full text-xs">
              <div className="flex gap-x-3 font-semibold text-gray-600 mb-2 pb-2 border-b-2 border-gray-300">
                <span className="flex-[3]">Item</span>
                <span className="w-16 text-center">Qty</span>
                <span className="w-24 text-right">Price</span>
                <span className="w-24 text-right">Subtotal</span>
              </div>
              {cart.map((item) => {
                const badgeColor = badgeColors[item.categoryBadge] || "text-gray-600"
                return (
                  <div key={item.id} className="receipt-item py-2 border-b border-gray-200 last:border-b-0">
                    <div className="flex gap-x-3">
                      <span className="flex-[3] text-gray-700">
                        {item.name}
                      </span>
                      <span className="w-16 text-center text-gray-600">{item.quantity}</span>
                      <span className="w-24 text-right text-gray-600">RM{item.price.toFixed(2)}</span>
                      <span className="w-24 text-right font-semibold text-gray-800">RM{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex gap-1.5 mt-0.5">
                      <span className={`text-[9px] font-medium ${badgeColor}`}>
                        {item.categoryBadge}
                      </span>
                      {item.isAddOn && (
                        <span className="text-[9px] font-medium text-amber-600">
                          +Add On
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t-2 border-dashed border-gray-400 my-4" />

            <div className="receipt-footer space-y-2 text-sm">
              <div className="flex justify-between border-t-2 border-gray-400 pt-2 font-bold">
                <span className="text-gray-800 text-base">TOTAL</span>
                <span className="text-xl text-gray-800">RM{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t-2 border-black my-6" />

            <div className="text-center space-y-1.5">
              <p className="text-xs text-gray-500 italic">Terima Kasih™</p>
              <p className="text-xs text-gray-400">KAK AS - 0162924664</p>
            </div>
          </div>

          <div className="flex gap-2 p-4 pt-0 print:hidden">
            <button
              onClick={handleShare}
              disabled={!ready || sharing}
              className="flex-[2] bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              {!ready ? "Preparing..." : sharing ? "Processing..." : "Share PDF"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReceiptBayaran
