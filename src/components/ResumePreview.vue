<template>
  <div id="resumePreview">
    <div class="baseInformation"></div> 
    <section class="one"  data-name="profile" v-show="resume.profile">
      <div class="container">
        <div class="zuoyouName">
          <p class="pname">{{resume.profile.name}}</p>
          <p class="twoname">{{resume.profile.city}}</p>
        </div>
        <img src="../assets/touxiang.jpg">
        <div class="introduce">
          <span v-show="resume.profile.sex">{{resume.profile.sex}}</span>
          <span v-show="resume.profile.title">{{resume.profile.title}}</span>
          <span v-show="resume.profile.birthday">{{resume.profile.birthday}}</span>
          <span v-show="resume.profile.marray">{{resume.profile.marray}}</span>
        </div>
      </div>
      
    </section>

    <section class="two" data-name="workHistory" v-show="resume.workHistory.length">
      <div class="container">
         <div class="title">
            <svg class="icon">
              <use :xlink:href="`#icon-work`"></use>
            </svg>
            <span>工作经验</span>
          </div>
          <ol>
            <li v-for="item in resume.workHistory">
              <span>{{item.worktime}}</span>
              <span class="midyi">{{item.company}}</span>
              <span>{{item.details}}</span>
            </li>
          </ol>
      </div>
      
    </section>

    <section  class="three" data-name="education" v-show="resume.education.length">
      <div class="container">
         <div class="title">
            <svg class="icon">
              <use :xlink:href="`#icon-book`"></use>
            </svg>
            <span>教育背景</span>
          </div>
          <ol>
            <li v-for="item in resume.education">
              <div class="zong">
                <span>{{item.studytime}}</span>
                <span class="midyi">{{item.school}}</span>
                <span>{{item.details}}</span>
              </div>
              <div class="school_desc">{{item.schooldesc}}</div>
            </li>
          </ol>
      </div>
    </section>

    <section  class="three" data-name="projects" v-show="resume.projects.length">
      <div class="container">
         <div class="title">
            <svg class="icon">
              <use :xlink:href="`#icon-heart`"></use>
            </svg>
            <span>项目经验</span>
          </div>
          <ol>
            <li v-for="item in resume.projects">
              <div class="zong">
                <span>{{item.ptime}}</span>
                <span class="midyi">{{item.name}}</span>
                <span>{{item.role}}</span>
              </div>
              <div class="school_desc">{{item.job}}</div>
            </li>
          </ol>
      </div>
    </section>

    <section  class="three awards" data-name="awards" v-show="resume.awards.length">
      <div class="container">
         <div class="title">
            <svg class="icon">
              <use :xlink:href="`#icon-award`"></use>
            </svg>
            <span>获奖情况</span>
          </div>
          <ol>
            <li v-for="item in resume.awards">
              <i class="el-icon-star-on"></i>
              <span>{{item.name}}</span>
            </li>
          </ol>
      </div>
    </section>

    <section  class="three contacts" data-name="contacts" v-show="resume.contacts">
      <div class="container">
         <div class="title">
            <svg class="icon">
              <use :xlink:href="`#icon-phone`"></use>
            </svg>
            <span>联系方式</span>
          </div>
          
          <div class="shougong">
            <div v-show="resume.contacts.tel" class="jiba">
              <svg class="icon">
                <use :xlink:href="`#icon-phone`"></use>
              </svg>
              <span class="telleft">{{resume.contacts.tel}}</span>
            </div>
            <div v-show="resume.contacts.qq" class="jiba">
              <svg class="icon">
                <use :xlink:href="`#icon-msnui-logo-qq`"></use>
              </svg>
              <span class="telleft">{{resume.contacts.qq}}</span>
            </div>
            <div v-show="resume.contacts.wechat" class="jiba">
              <svg class="icon">
                <use :xlink:href="`#icon-wechat`"></use>
              </svg>
              <span class="telleft">{{resume.contacts.wechat}}</span>
            </div>
            <div v-show="resume.contacts.mail" class="jiba">
              <svg class="icon">
                <use :xlink:href="`#icon-mail`"></use>
              </svg>
              <span class="telleft">{{resume.contacts.mail}}</span>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        return this.$store.state.resume
      }
    }
  }
</script>

<style lang="scss">
  #resumePreview{ background:white; box-shadow:0 1px 3px 0 rgba(0,0,0,0.25); padding: 2em;
    color: #333; line-height: 1.2; overflow: auto;
    * {box-sizing: border-box; font-variant: normal; font-weight: normal;}
    ol{ list-style: none; }
    // section + section{ margin-top: 2em; }
    p{ white-space: pre-line; } 
    .baseInformation{
      border-color: #254665;
      background: #fff url(../assets/j2_head.png) top center no-repeat;
      height: 80px;
      width: 100%;
    }
    section.one{
      .container{
        position: relative;
        margin-bottom: 72px;
        .zuoyouName{
          padding: 0 0 0 2em;
          .pname{
            color: #254665;
            padding-bottom: 12px;
            font-size: 30px;
            display: inline-block;
            font-family: Microsoft YaHei;
          }
        }
        img{
          position: absolute;
          width: 128px;
          height: 158px;
          right: 2em;
          top: 0;
          border: 4px solid #e5e5e5;
          background: #e5e5e5;
          overflow: hidden;
        }
        .introduce{
          padding:16px 0 0 2em;
        }
        .introduce span{
            display: inline-block;
            line-height: 12px;
            padding-right: 8px;
            margin: 0 2px 0 4px;
            border-right: 2px solid #b4b4b4;
            letter-spacing: 0.4px;
            font-size: 14px;
            color: #878686;
            height: 100%;
        }
      }
    }
    section.two{
      .container{
        margin-bottom: 40px;
        >.title{
          color: #254665;
          display: flex;
          justify-content:center;
          align-items:center;
          span{
            width: 780px;
            border-bottom: 1px solid #0b70bd;
            display: inline-block;
            font-size: 18px;
            word-break: break-all;
            font-weight: bold;
            margin-left:  8px;
            padding-bottom: 4px;
          }
        }
        >ol li{
          display: flex;
          justify-content:space-between;
          padding: 16px 200px 0 32px;
          position: relative;
          .midyi{
            display: inline-block;
            position: absolute;
            left: 30%;
          }
        }
        svg.icon{
          width: 30px;
          height: 30px;
          display: block;
        }
      }
    }
    section.three{
      .container{
        margin-bottom: 40px;
        >.title{
          color: #254665;
          display: flex;
          justify-content:center;
          align-items:center;
          span{
            width: 780px;
            border-bottom: 1px solid #0b70bd;
            display: inline-block;
            font-size: 18px;
            word-break: break-all;
            font-weight: bold;
            margin-left:  8px;
            padding-bottom: 4px;
          }
        }
        >ol li{
          display: flex;
          justify-content:space-between;
          padding: 16px 200px 0 32px;
          flex-wrap:wrap;
          position: relative;
          .zong{
            display: flex;
            justify-content:space-between;
            width: 100%;
          }
          .school_desc{
            overflow-wrap:normal;
            // text-indent: 25px;
            padding-top: 16px;
            letter-spacing: 0.4px;
            font-size: 14px;
            color: #878686;
            height: 100%;
          }
          .midyi{
            display: inline-block;
            position: absolute;
            left: 30%;
          }
        }
        svg.icon{
          width: 30px;
          height: 30px;
          display: block;
        }
      }
    }
    .awards{
      li{
        position: relative;
        span{
          letter-spacing: 0.4px;
          font-size: 14px;
          color: #878686;
          display: inline-block;
          position: absolute;
          left:60px;
        }
      }
    }
    .contacts{
      .shougong{
        padding: 16px;
        display: flex;
        justify-content:space-around;
        .jiba{
          display: flex;
          align-items: center;
          .telleft{
            padding-left: 8px;
            font-weight: bold;
            color: #878686;
          }
        }
      }
    }
  }
</style>

