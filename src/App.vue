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
  background: #ECEEF3;
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.topbar{
  /* background: red; */
}
main{
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 0 240px;
}
.resumeEditor{
  width: 40em;
  margin: 16px 8px 16px 0;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
}
.resumepreview{
  flex: 1;
  margin: 16px 16px 16px 8px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
</style>
