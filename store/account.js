import axios from '@nuxtjs/axios'

const initialState = {
    address: ''
}

export const state = initialState

export const mutations = {
    setAddress(state, payload) {
        state.address = payload
    },
    reset(state) {
        Object.assign(state, initialState)
    }
}

export const actions = {
    reset({ commit }) {
        commit('reset')
    }
}

