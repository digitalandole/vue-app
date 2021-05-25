<template>
  <px-assets-table :assets="assets" />
</template>
<script>
//import { defineComponent } from '@vue/composition-api'
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";
export default {
  components: { PxAssetsTable },
  name: "Home",
  component: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
