import * as axios from "axios"

axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const requests = {
    getPlans() {
        return instance.get('plans')
    },
    sendTotal(payload) {
        return instance.post('total', payload)
    }
}