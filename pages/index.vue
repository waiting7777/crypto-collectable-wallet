<template>
  <div>
    <Header />
    <div class="container mx-auto max-w-md py-8 px-4 sm:px-0">
      <div class="grid grid-cols-2 gap-4">
        <router-link v-for="item in assets" :key="item.id" :to="`/assets/${item.asset_contract.address}/${item.token_id}`" tag="div" class="asset">
          <div class="flex-1">
            <img :src="item.image_url"/>
          </div>
          <div class="text-xs mt-2 truncate">
            {{ item.name }}
          </div>
        </router-link>
      </div>
      <infinite-loading v-if="address" :identifier="identifer" @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getAssets, getAddress } from '@/services/api'

export default {
  data() {
    return {
      assets: [],
      offset: 0,
      itemPerPage: 20,
      identifer: +new Date(),
    }
  },
  computed: {
    ...mapState('account', {
      address: state => state.address
    })
  },
  mounted() {

  },
  methods: {
    ...mapMutations('account', ['setAddress']),
    infiniteHandler($state) {
      getAssets(this.address, this.offset).then(res => {
        const assets = res.assets
        this.assets = this.assets.concat(assets)
          if (assets.length < this.itemPerPage) {
            $state.complete()
          } else {
            this.offset += this.itemPerPage
            $state.loaded()
          }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.asset {
  @apply border border-gray-300 rounded transition duration-100 px-4 py-2 flex flex-col;

  &:hover {
    box-shadow: #04111d40 0px 0px 8px 0px;
    transform: translateY(-2px);
    cursor: pointer;
  }
}
</style>