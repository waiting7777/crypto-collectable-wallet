<template>
    <div class="container mx-auto max-w-md py-4 px-4 sm:px-0 h-full overflow-hidden relative">
        <div v-if="Object.keys(detail).length > 0" class="flex flex-col gap-2 items-center h-full overflow-hidden">
            <div class="mb-2 text-blue-400">{{ detail.collection.name }}</div>
            <div class="w-full">
                <img class="w-full" :src="detail.image_url" />
            </div>
            <div class="font-bold">
                {{ detail.name }}
            </div>
            <div class="flex-1 text-xs mb-8">
                {{ detail.description }}
            </div>
            <div class="fixed inset-x-0 mx-auto bottom-4 w-36 text-center border border-gray-400 rounded bg-white">
                <a :href="detail.permalink">
                    Permalink
                </a>
            </div>
        </div>
        <div class="absolute left-4 top-3">
            <nuxt-link to="/">
                <Left />
            </nuxt-link>
        </div>
        <infinite-loading class="mt-8" :identifier="identifer" @infinite="infiniteHandler" />
    </div>
</template>

<script>
import Left from '@/components/icons/Left'
import { getAssetsDetail } from '@/services/api'

export default {
    components: {
        Left
    },
    data() {
        return {
            detail: {},
            contractAddress: null,
            tokenId: null,
            identifer: +new Date()
        }
    },
    created() {
        const { contractAddress, tokenId } = this.$route.params
        
        if (!contractAddress || !tokenId) {
            this.$router.push('/')
        }

        this.contractAddress = contractAddress
        this.tokenId = tokenId
    },
    methods: {
        infiniteHandler($state) {
            getAssetsDetail(this.contractAddress, this.tokenId).then(res => {
                this.detail = res
                $state.loaded()
                $state.complete()
            })
        }
    }
}
</script>