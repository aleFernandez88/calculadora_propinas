import type { OrderItemT } from "../types"

type ItemInOrderT = {
    item: OrderItemT,
    removeItem: (id: number) => void
}
export const OrderItem = ({ item, removeItem }: ItemInOrderT) => {
    return (
        <>
            <div className="flex justify-between items-center border-b-1 w-full border-gray-400 hover:bg-emerald-300 p-2 mt-1 shadow shadow-l shadow-gray-400">
                <div className="flex flex-col items-start">
                    <div className="font-light">
                        <p className="capitalize text-lg">{item.name} - <span className="font-normal">${item.price} -</span></p>
                    </div>
                    <p className="font-semibold text-xl">cant:<span className=" text-cyan-800 font-bold"> {item.quantity}</span> : <span className="text-cyan-800 font-bold " >$ {item.price * item.quantity} -</span>
                    </p>
                </div>
                <button
                    className="bg-gray-600 h-8 w-8 rounded-full"
                    onClick={() => removeItem(item.id)}
                >❌</button>
            </div>
        </>
    )
}
