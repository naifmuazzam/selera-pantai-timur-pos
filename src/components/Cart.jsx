import CartItem from "./CartItem"

const Cart = ({ cart, onIncrease, onDecrease, onRemove, onCheckout, onClose, onNewOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-gray-50">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Cart
          {itemCount > 0 && (
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0 min-h-0 px-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <p className="text-sm">Cart is empty</p>
            <p className="text-xs">Add items from the menu</p>
          </div>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-medium">Total</span>
            <span className="text-xl font-bold text-gray-800">
              RM{total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-lg transition-colors active:scale-95 shadow-lg shadow-blue-200"
          >
            CHECKOUT
          </button>
          <button
            onClick={onNewOrder}
            className="w-full mt-2 text-gray-500 hover:text-red-500 text-sm font-medium py-2 transition-colors"
          >
            New Order
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
