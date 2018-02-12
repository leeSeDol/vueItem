<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-size: 20px;
}
ul li{
  list-style:none;
}
a{
  text-decoration: none;
  color:#000;
}

.fixed{
  position: fixed;
}
.tc{
  text-align:center;
}
#app{
  text-align:center;
}
</style>
