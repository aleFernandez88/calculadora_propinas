import { useMemo } from "react"
import type { OrderItemT } from "../types"
import { formatCurrency } from "../helpers/formatCurrency"

type OrderTotalsProps = {
    order: OrderItemT[],
    tip: number,
    placeOrder: () => void
}
export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.quantity * item.price), 0
        ), [order])
    const tipAmount = useMemo(() => {
        return subtotalAmount * tip
    }, [tip, order])
    const totalAmount = useMemo(() => {
        return tipAmount + subtotalAmount
    }, [tip, order])
    return (
        <>
            <div className="flex flex-col mt-4 ">
                <h2 className="text-cyan-700 text-3xl font-bold mb-2">Totales y propina</h2>
                <p className="ml-2.5 text-xl font-normal">
                    Sub total a pagar:
                    <span className="text-2xl font-semibold">
                        {formatCurrency(subtotalAmount)}</span>
                </p>
                <p className="ml-2.5 text-xl font-normal">
                    Propina a pagar:
                    <span className="text-2xl font-semibold">
                        {formatCurrency(tipAmount)}</span>
                </p>
                <p className="text-2xl font-semibold mt-2">Total a pagar: <span className="text-2xl font-bold">{formatCurrency(totalAmount)}</span></p>
            </div>
            <button
                className="w-full bg-cyan-700  uppercase p-1.5 text-cyan-50 font-semibold text-2xl rounded-xl disabled:opacity-20"
                disabled={totalAmount === 0}
                onClick={() => placeOrder()}
            >Realizar pedido</button>
        </>
    )
}
