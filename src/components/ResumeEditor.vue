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
        <h2>个人信息</h2>
        <el-form :label-position="labelPosition" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="resume.person.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="resume.person.sex"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="resume.person.age"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{ active: isActive==1 }">
        <Items title="工作经历" v-bind:items="resume.workHistory" :labels="{company:'公司',location:'地点',worktime:'入职时间'}" /> 
      </li>
      <li v-bind:class="{ active: isActive==2 }">
        <Items title="教育经历" v-bind:items="resume.education" :labels="{school:'学校',degree:'学历'}" /> 
      </li>
      <li v-bind:class="{ active: isActive==3 }">
        <Items title="项目经历" v-bind:items="resume.project" :labels="{pname:'项目名称',pduty:'项目职责',pdesc:'项目描述'}" />
      </li>
      <li v-bind:class="{ active: isActive==4 }">
        <Items title="获奖情况" v-bind:items="resume.award" :labels="{aname:'奖项名称',ajibie:'获奖等级'}" />
      </li>
      <li v-bind:class="{ active: isActive==5 }">
        <h2>联系方式</h2>
        <el-form label-position="top" label-width="80px">
          <el-form-item label="电话">
            <el-input v-model="resume.contact.tel"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contact.wechat"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="resume.contact.qq"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.contact.mail"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>
<script>
import Items from './Items'
export default {
  name: 'ResumeEditor',
  components:{Items},
  props:['resume'],
  data:function(){
    return {
      isActive:0,
      iconArray:['icon-idcard','icon-work','icon-school','icon-heart','icon-award','icon-tel02'],
      labelPosition:'top',
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
  #resumeEditor{
    min-height: 100px;
    display: flex;
    >ol{
      flex: 1;
      .container{
        position: relative;
        .el-icon-error{
          position: absolute;
          right: 0;
          top: 0;
        }
      }
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