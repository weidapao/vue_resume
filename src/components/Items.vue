<template>
  <div>
    <h2>{{title}}</h2>
    <el-form label-position="top" label-width="80px">
      <div class="container" v-for="(value,index) in items">
        <el-form-item v-for="key in keys" v-bind:label="labels[key]||key">
          <el-input v-model="value[key]"></el-input>
        </el-form-item>
        <i v-on:click="removeWork(index)" class="el-icon-error"></i>
        <hr>
      </div>
      <el-button v-on:click="addWork()" type="primary">增加</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props:['items','title','labels'],
  computed:{
    keys(){
      return Object.keys(this.items[0]);
    }
  },
  methods:{
    addWork: function (message) {
      this.items.push({
        company:'',
        location:'',
        worktime:''
      });
    },
    removeWork: function(index){
      this.items.splice(index,1);
    }
  },
  
}
</script>

