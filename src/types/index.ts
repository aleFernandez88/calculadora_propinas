export type MenuItemT = {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number
}

export type OrderItemT = MenuItemT & {
    quantity: number
}