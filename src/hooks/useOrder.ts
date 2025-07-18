import { useState } from "react";
import type { OrderItemT, MenuItemT } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItemT[]>([])
    const [tip, setTip] = useState(0)
    const addItem = (item: MenuItemT) => {

        const itemExist = order.find(inOrder => inOrder.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(inOrder => inOrder.id === item.id ?
                { ...inOrder, quantity: inOrder.quantity + 1 } : inOrder)
            setOrder(updateOrder)
            console.log("update: ", order);

        }
        else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: number) => {
        const updateOrder = order.filter(item => item.id !== id)
        setOrder(updateOrder)
    }

    const placeOrder = () => {
        console.log("Enviandoo...");
        setOrder([])
        setTip(0)
    }

    return {
        order,
        addItem,
        removeItem,
        tip,
        setTip,
        placeOrder
    }
}

