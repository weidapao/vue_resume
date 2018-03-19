<template>
  <div id="resumeEditor">
    <div class="resumebar">
      <ul>
        <li class="active">
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-idcard"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-school"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-heart"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-award"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tel02"></use>
          </svg>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor'
}
</script>

<style lang="scss">
  #resumeEditor{
    min-height: 100px;
    display: flex;
    .resumebar{
      background: black;
      width: 80px;
      
      >ul>li{
        text-align: center;
        padding: 8px 0;
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