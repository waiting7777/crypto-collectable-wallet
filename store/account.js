const initialState = {
    address: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'
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

