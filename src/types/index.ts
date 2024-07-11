export type MenuItem = {
    id: number,
    name: string,
    precio: number
}

export type OrderItem = MenuItem & {
    quantity: number
}