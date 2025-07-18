import type { OrderItemT } from "../types"
import { OrderItem } from "./OrderItem"
import { OrderTotals } from "./OrderTotals"
import { TipPercentageForm } from "./TipPercentageForm"

type OrderProps = {
    order: OrderItemT[],
    removeItem: (id: number) => void,
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number,
    placeOrder: () => void

}

export const OrderContents = ({ order, removeItem, setTip, tip, placeOrder }: OrderProps) => {
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

            <div className="space-y-5 mt-2.5">
                <TipPercentageForm
                    setTip={setTip}
                    tip={tip}
                />
                <OrderTotals
                    order={order}
                    tip={tip}
                    placeOrder={placeOrder}
                />
            </div>
        </>
    )
}
