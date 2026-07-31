import { useState, useMemo, useEffect } from "react"
import categories from "./data/menu"
import MenuCard from "./components/MenuCard"
import Cart from "./components/Cart"
import ReceiptModal from "./components/ReceiptModal"

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("selera-cart")
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [showReceipt, setShowReceipt] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [showCart, setShowCart] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    localStorage.setItem("selera-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id)
      if (item.quantity === 1) {
        return prev.filter((i) => i.id !== id)
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cart])

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }, [cart])

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return null
    const matches = (item) =>
      item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(matches),
        addOns: (cat.addOns || []).filter(matches),
      }))
      .filter((cat) => cat.items.length > 0 || cat.addOns.length > 0)
  }, [searchQuery])

  const handleCheckout = () => {
    if (cart.length === 0) return
    setShowCart(false)
    setShowReceipt(true)
  }

  const handleCloseReceipt = () => {
    setShowReceipt(false)
    setCart([])
  }

  const handleNewOrder = () => {
    setCart([])
    setShowCart(false)
    localStorage.removeItem("selera-cart")
  }

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[7fr_3fr] grid-rows-1 overflow-hidden bg-gray-100">
      <div className="min-w-0 h-full p-4 overflow-y-auto pb-24 md:pb-4">
        <div className="mb-4 flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Selera Pantai Timur - Kak As</h1>
            <p className="text-sm text-gray-500">Select items to add to cart</p>
          </div>
        </div>

        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari menu..."
            className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => {
              setActiveCategory("all")
              setSearchQuery("")
            }}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setSearchQuery("")
              }}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {searchResults ? (
          searchResults.length > 0 ? (
            searchResults.map((cat) => (
              <div key={cat.id} className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 mb-3">{cat.name}</h2>
                {cat.items.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cat.items.map((item) => (
                      <MenuCard key={item.id} item={item} onAdd={addToCart} />
                    ))}
                  </div>
                )}
                {cat.addOns.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-amber-600 mb-2 flex items-center gap-1">
                      <span>➕</span> Add On
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                      {cat.addOns.map((item) => (
                        <MenuCard key={item.id} item={item} onAdd={addToCart} isAddOn />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-gray-500">
              Tiada menu dijumpai untuk "{searchQuery.trim()}"
            </div>
          )
        ) : activeCategory === "all" ? (
          categories.map((cat) => (
            <div key={cat.id} className="mb-6">
              <h2 className="text-lg font-bold text-gray-700 mb-3">{cat.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {cat.items.map((item) => (
                  <MenuCard key={item.id} item={item} onAdd={addToCart} />
                ))}
              </div>
              {cat.addOns && cat.addOns.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-amber-600 mb-2 flex items-center gap-1">
                    <span>➕</span> Add On
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cat.addOns.map((item) => (
                      <MenuCard key={item.id} item={item} onAdd={addToCart} isAddOn />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          (() => {
            const cat = categories.find((c) => c.id === activeCategory)
            if (!cat) return null
            return (
              <>
                <h2 className="text-lg font-bold text-gray-700 mb-3">{cat.name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                  {cat.items.map((item) => (
                    <MenuCard key={item.id} item={item} onAdd={addToCart} />
                  ))}
                </div>
                {cat.addOns && cat.addOns.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-amber-600 mb-2 flex items-center gap-1">
                      <span>➕</span> Add On
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                      {cat.addOns.map((item) => (
                        <MenuCard key={item.id} item={item} onAdd={addToCart} isAddOn />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )
          })()
        )}
      </div>

      <div className="hidden md:flex flex-col min-w-0 h-full border-l border-gray-200 bg-white">
        <Cart
          cart={cart}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
          onNewOrder={handleNewOrder}
        />
      </div>

      {cartCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-5 right-5 md:hidden flex items-center gap-2 bg-blue-600 text-white font-bold py-3.5 px-5 rounded-full shadow-lg shadow-blue-200/50 z-30 active:scale-95 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Cart ({cartCount})
        </button>
      )}

      {showCart && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            <div className="pt-2 pb-1 flex justify-center shrink-0">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">
              <Cart
                cart={cart}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
                onClose={() => setShowCart(false)}
                onNewOrder={handleNewOrder}
              />
            </div>
          </div>
        </div>
      )}

      {showReceipt && (
        <ReceiptModal
          cart={cart}
          total={total}
          onClose={handleCloseReceipt}
        />
      )}
    </div>
  )
}

export default App
