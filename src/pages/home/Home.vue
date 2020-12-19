<template>
  <div class="home">
    <h1>{{ message }} Page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    //注册子组件
    components: {
    },

    data() {
      return {
        message: 'This is Home'
      }
    },
    //生命周期-创建
    created() {

    },
    //生命周期-挂载
    mounted() {

    },
   //计算属性
    computed: {

    },
    //自定义方法 
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background-color: #fff;
  }
  h1 {
    color: red;
  }
</style>
