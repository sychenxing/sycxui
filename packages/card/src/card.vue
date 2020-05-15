<template>
    <div style="display:flex">
            <div style="display:inline">card</div>
            <div style="display:inline"><cx-input /></div>
    </div>
</template>

<script>
import CxInput  from '../../input'
export default {
  name: 'CxCard',
  components: {
    CxInput
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
