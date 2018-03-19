<template>
  <div id="resumeEditor">
    <div class="resumebar">
      <ul>
        <li v-for="i in [0,1,2,3,4,5]" 
            v-bind:class="{ active: isActive==i }"
            v-on:click="isActive = i" >
          <svg class="icon" aria-hidden="true" >
            <use v-bind:xlink:href="'#'+`${iconArray[i]}`"></use>
          </svg>
        </li>
      </ul>
    </div>
    <ol>
      <li v-bind:class="{ active: isActive==0 }">
        <el-form :label-position="labelPosition" label-width="80px">
          <el-form-item label="公司">
            <el-input v-model="person.company"></el-input>
          </el-form-item>
          <el-form-item label="地点">
            <el-input v-model="person.location"></el-input>
          </el-form-item>
          <el-form-item label="工作时间">
            <el-input v-model="person.worktime"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{ active: isActive==1 }">
        <el-form :label-position="labelPosition" label-width="80px">
          <div v-for="(value,index) in workHistory">
            <el-form-item label="公司">
              <el-input v-model="value.company"></el-input>
            </el-form-item>
            <el-form-item label="地点">
              <el-input v-model="value.location"></el-input>
            </el-form-item>
            <el-form-item label="工作时间">
              <el-input v-model="value.worktime"></el-input>
            </el-form-item>
            <el-button v-on:click="removeWork(index)" type="primary">删除</el-button>
          </div>
          <el-button v-on:click="addWork()" type="primary">增加</el-button>
        </el-form>
      </li>
      <li v-bind:class="{ active: isActive==2 }">
      </li>
      <li v-bind:class="{ active: isActive==3 }">
      </li>
      <li v-bind:class="{ active: isActive==4 }">
      </li>
      <li v-bind:class="{ active: isActive==5 }">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data:function(){
    return {
      isActive:0,
      iconArray:['icon-idcard','icon-work','icon-school','icon-heart','icon-award','icon-tel02'],
      labelPosition:'top',
      person:{
        company:'',
        location:'',
        worktime:''
      },
      workHistory:[{
        company:'',
        location:'',
        worktime:''
      },{
        company:'',
        location:'',
        worktime:''
      }],
    }
  },
  methods: {
    addWork: function (message) {
      this.workHistory.push({
        company:'',
        location:'',
        worktime:''
      });
    },
    removeWork: function(index){
      this.workHistory.splice(index,1);
    }
  }
}
</script>

<style lang="scss">
  #resumeEditor{
    min-height: 100px;
    display: flex;
    >ol{
      flex: 1;
    }
    >ol>li{
      display: none;
      padding: 16px 16px;
      height: 100%;
      width: 100%;
      overflow: auto;
      &.active{
        display: block;
      }
    }
    .resumebar{
      background: black;
      width: 80px;
      >ul>li{
        text-align: center;
        padding: 8px 0;
        margin-top: 16px;
        margin-bottom: 16px;
        height: 48px;  
        > svg{
          width: 24px;
          height: 24px;
          fill: white;
        }
        &.active{
          background: white;
          >svg{
            fill: black;
          }
        }
      }
    }
  }
</style>