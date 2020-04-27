import {requests} from '../api/api'

const SET_PLANS = 'SET-PLANS'
const SET_TYPES = 'SET-TYPES'
const SET_PRICE = 'SET-PRICE'
const SET_QUANTITY = 'SET-QUANTITY'
const SET_TOTAL = 'SET-TOTAL'
const SET_OFFER = 'SET-OFFER'

let initState = {
    plans: [],
    types: null,
    price: null,
    quantity: '1',
    total: '0',
    offer: {}
}

const plansReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PLANS:
            return {
                ...state,
                plans: action.plans.map(p => p)
            }
        case SET_TYPES:
            return {
                ...state,
                types: action.types
            }
        case SET_PRICE:
            return {
                ...state,
                price: action.price
            }
        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.quantity
            }
        case SET_TOTAL:
            return {
                ...state,
                total: action.total
            }
        case SET_OFFER:
            return {
                ...state,
                offer: {...action.offer}
            }
        default:
            return state
    }
}

const setPlans = (plans) => ({
    type: SET_PLANS, plans
})

const setTypes = (types) => ({
    type: SET_TYPES, types
})

const setPrice = (price) => ({
    type: SET_PRICE, price
})

const setQuantity = (quantity) => ({
    type: SET_QUANTITY, quantity
})

const setTotal = (total) => ({
    type: SET_TOTAL, total
})

const setOffer = (offer) => ({
    type: SET_OFFER, offer
})

export const getPlansThunk = () => async (dispatch) => {
    const response = await requests.getPlans()
    let plans = response.data
    dispatch(setPlans(plans))
}

export const setTypesThunk = (types) => (dispatch) => {
    dispatch(setTypes(types))
}

export const setPriceThunk = (price) => (dispatch) => {
    dispatch(setPrice(price))
}

export const setQuantityThunk = (quantity) => (dispatch) => {
    dispatch(setQuantity(quantity))
}

export const setTotalThunk = (quantity, price) => (dispatch) => {
    let q = parseInt(quantity)
    let p = parseInt(price)
    let total = q * p 
    dispatch(setTotal(total))
}

export const sendTotalThunk = (payload) => async (dispatch) => {
    const response = await requests.sendTotal(payload)
    dispatch(setOffer(response.data))
}

export default plansReducer