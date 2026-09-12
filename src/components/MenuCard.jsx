import ItemIcon from "./ItemIcon"

const MenuCard = ({ item, onAdd, isAddOn }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${isAddOn ? "border-2 border-dashed border-amber-200" : ""}`}>
      <div className={`w-full ${isAddOn ? "h-20" : "h-32"} flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-gray-500`}>
        <ItemIcon name={item.icon} className={isAddOn ? "w-10 h-10" : "w-14 h-14"} />
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight">
          {item.name}
        </h3>
        <p className="text-blue-600 font-bold text-base">
          RM{item.price.toFixed(2)}
        </p>
        <button
          onClick={() => onAdd(item)}
          className={`mt-1 w-full text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors active:scale-95 ${isAddOn ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          + {isAddOn ? "Add On" : "Add"}
        </button>
      </div>
    </div>
  )
}

export default MenuCard
