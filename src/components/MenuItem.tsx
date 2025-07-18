import { formatCurrency } from "../helpers/formatCurrency"
import type { MenuItemT, OrderItemT } from "../types"

type MenuItemProps = {
    item: MenuItemT,
    addItem: (item: MenuItemT) => void
}
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <>
            <button
                className="capitalize flex gap-3 justify-between border-2 w-full border-cyan-500 hover:bg-cyan-500 p-3 mt-1"
                onClick={() => addItem(item)}>
                <p>{item.name}</p>
                <p className="font-black">{formatCurrency(item.price)} -</p>
            </button>
        </>
    )
}
