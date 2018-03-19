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
      <li v-bind:class="{ active: isActive==i }"
          v-for="i in [0,1,2,3,4,5]">
        tab{{i}}
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
    }
  },
}
</script>

<style lang="scss">
  #resumeEditor{
    min-height: 100px;
    display: flex;
    >ol>li{
      display: none;
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