<template>
  <div>

    <!-- <div v-show="isLoading">
      <dotLoading></dotLoading>
    </div> -->
    
  </div>
</template>

<script>

// import dotLoading from '@/components/block/dotLoading'

export default {
  name: 'HomePage',
  components: {
    // 'dotLoading': dotLoading
  },

  data () {
    return {
      isLoading: false
    }
  },

  created() {
    this.getList()
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
