import axios from 'axios'

export const getAssets = (address, offset) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.opensea.io/api/v1/assets?owner=${address}&offset=${offset}&limit=20`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getAssetsDetail = (contractAddress, tokenId) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}
