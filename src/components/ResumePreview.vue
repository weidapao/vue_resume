<template>
  <div id="resumePreview">

    <section class="baseInformation" data-name="profile" v-show="resume.profile">
      <div class="zuoyouname">
        <span>{{resume.profile.name}}</span>
        <span>{{resume.profile.city}}</span>
      </div>
      <h1>
        {{resume.profile.name}}
      </h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>

    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}} </span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>
          <td v-show="item.content"> {{item.content}} </td>
        </tr>
      </table>
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
    p{ white-space: pre-line; } // 请问为什么要加这一行
    .baseInformation{
      border-color: #254665;
      background: #fff url(../assets/j2_head.png) top center no-repeat;
    }
  }
</style>

