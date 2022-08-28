// for Add Items to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product

    }
}
// for Add Items From cart

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product

    }
}