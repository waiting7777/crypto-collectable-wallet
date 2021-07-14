import Vue from 'vue'

const utils = {
    ethAddressEllipsis: (address) => {
        return `${address.substr(0, 4)}...${address.substr(-4, 4)}`
    }
}

Vue.prototype.$utils = utils
