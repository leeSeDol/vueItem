<template>
    <div class="hello">
        <Hello></Hello>
        <Single></Single>
        <ma></ma>
        <mb></mb>
    </div>
</template>

<script>
import Hello from './Hello'
import Single from './Single'
import ma from './A'
import mb from './B'

export default {
    name: 'HelloWorld',
    components: {
        Hello,
        Single,
        ma,
        mb
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
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
