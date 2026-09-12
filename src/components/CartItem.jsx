const badgeColors = {
  "Nasi Kerabu": "bg-blue-100 text-blue-700",
  "Nasi Air": "bg-green-100 text-green-700",
  "Mee": "bg-purple-100 text-purple-700",
  "Meggi Celup": "bg-orange-100 text-orange-700",
  "Kerabu Meggi": "bg-red-100 text-red-700",
  "Minuman Panas": "bg-rose-100 text-rose-700",
  "Minuman Sejuk": "bg-cyan-100 text-cyan-700",
  "Minuman Special": "bg-teal-100 text-teal-700",
}

import ItemIcon from "./ItemIcon"

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const subtotal = item.price * item.quantity
  const badgeColor = badgeColors[item.categoryBadge] || "bg-gray-100 text-gray-600"

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 text-gray-500 flex items-center justify-center shrink-0">
        <ItemIcon name={item.icon} className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <p className="font-medium text-gray-800 text-sm truncate">
            {item.name}
          </p>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${badgeColor}`}>
            {item.categoryBadge}
          </span>
          {item.isAddOn && (
            <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
              +Add On
            </span>
          )}
        </div>
        <p className="text-blue-600 font-semibold text-sm mt-0.5">
          RM{subtotal.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => onDecrease(item.id)}
          className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm"
        >
          -
        </button>
        <span className="w-7 text-center font-semibold text-gray-800 text-sm">
          {item.quantity}
        </span>
        <button
          onClick={() => onIncrease(item.id)}
          className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-0.5 shrink-0"
        title="Remove"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default CartItem
