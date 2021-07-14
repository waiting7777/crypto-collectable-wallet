<template>
  <div class="header sticky w-full bg-white top-0 border-b border-gray-300 dark:bg-gray-dark z-50">
    <div class="h-12 flex items-center p-4 sm:p-6 text-black dark:text-white">
      <div class="w-full mx-auto">
        <div class="flex items-center">
          <nuxt-link to="/">
            <div class="flex items-center">
              <Logo class="fill-current w-6" />
              <div class="ml-2 font-bold text-lg uppercase hidden sm:block">Collectable Wallet</div>
            </div>
          </nuxt-link>
          <div class="flex flex-grow justify-end font-bold">
            <div>{{ $utils.ethAddressEllipsis(address) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/icons/Logo'

import { mapState } from 'vuex'
export default {
  components: {
    Logo
  },
  computed: {
    ...mapState('account', {
      address: state => state.address
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
