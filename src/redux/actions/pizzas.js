

export const fetchPizzas = (payload) => ({
    type: "FETCH_PIZZAS",
    payload
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

