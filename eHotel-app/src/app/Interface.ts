export interface User {
    id?: number
    fname: string
    email: string
    phone: number
    password: string
    loggedin?: boolean
}

export interface hotel {
    id?: number
    uid?: number
    hotelName: string
    location : string
    price: string
}