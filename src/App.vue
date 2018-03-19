<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <ResumeEditor class="resumeEditor"/>
      <ResumePreview class="resumepreview"/>
    </main>
  </div>
</template>

<script>
import 'normalize.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'


import './assets/reset.scss'

export default {
  name: 'App',
  data:function(){
    return {firstword:'加油'}
  },
  components:{
    Topbar,ResumeEditor,ResumePreview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topbar{
  background: red;
}
main{
  display: flex;
  flex: 1;
  height: 100vh;
  background: green;
  flex: 1;
}
.resumeEditor{
  width: 20em;
}
.resumepreview{
  flex: 1;
}
</style>
