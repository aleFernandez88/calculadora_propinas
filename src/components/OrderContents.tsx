import type { OrderItemT } from "../types"
import { OrderItem } from "./OrderItem"
import { OrderTotals } from "./OrderTotals"

type OrderProps = {
    order: OrderItemT[],
    removeItem: (id: number) => void
}

export const OrderContents = ({ order, removeItem }: OrderProps) => {
    return (
        <>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className='space-y-3 mt-6'>
                {
                    order.map((item: OrderItemT) => (
                        <OrderItem
                            key={item.id}
                            item={item}
                            removeItem={removeItem}
                        />

                    ))
                }
            </div>
            <OrderTotals order={order} />
        </>
    )
}
