import type { OrderItemT } from "../types"

type OrderTotalsProps = {
    order: OrderItemT[]
}
export const OrderTotals = ({ order }: OrderTotalsProps) => {
    return (
        <div className="space-y-5 mt-2.5">
            <h2 className="font-bold text-2xl text-cyan-700">Totales y propina</h2>
            <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">Sub total a pagar:</p>
                <p className="text-xl font-bold">Propina a pagar:</p>
                <p className="text-xl font-bold">Total a pagar:</p>
            </div>
            <button>Realizar pedido.</button>
        </div>
    )
}
