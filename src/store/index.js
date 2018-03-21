import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样
import objectPath from "object-path"


Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    Caonima:{'profile':{'name':'姓名','city':'城市','title':'工作岗位','birthday':'出生年月'},
    'workHistory':{'company':'公司','details':'公司细节'},
    'education':{'school':'学校','details':'学校细节',},
    'projects':{'name':'项目','details':'项目细节',},
    'awards':{'name':'获奖','details':'获奖细节',},
    'contacts':{'contact':'联系方式','details':'联系方式细节',}},
    resumeConfig: [
        {field: 'profile', icon: 'id', keys: ['name', 'city', 'title', 'birthday']},
        {field: 'workHistory', icon: 'work', keys: ['company', 'details']},
        {field: 'education', icon: 'book', keys: ['school', 'details']},
        {field: 'projects', icon: 'heart', keys: ['name', 'details']},
        {field: 'awards', icon: 'cup', keys: ['name', 'details']},
        {field: 'contacts', icon: 'phone', keys: ['contact', 'details']}
    ],
    resume: {
      Caonima:{'profile':{'name':'姓名','city':'城市','title':'工作岗位','birthday':'出生年月'},
      'workHistory':{'company':'公司','details':'公司细节'},
      'education':{'school':'学校','details':'学校细节',},
      'projects':{'name':'项目','details':'项目细节',},
      'awards':{'name':'获奖','details':'获奖细节',},
      'contacts':{'contact':'联系方式','details':'联系方式细节',}},
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: 'dajiba',
        city: '大城市铁岭',
        title: '首席装逼师',
        birthday: '1990-01-01'
      },
      workHistory: [
        {
          company: '鸡飞狗跳公司', details: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
我的主要工作如下:
1. 完成既定产品需求。
2. 修复 bug。`
        },
      ],
      education: [
        { school: '黄志诚警官大学', details: '本科' },
      ],
      projects: [
        { name: 'project A', details: '文字' },
      ],
      awards: [
        { name: '再来十瓶', details: '连续十次获得「再来一瓶」奖励' },
      ],
      contacts: [
        { contact: 'phone', details: '13812345678' },
      ],
    }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = null
    },
    addResumeSubfield(state, {field}) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
          Vue.set(empty, key, '')
      })
    },
    delResumeSubfield(state, {path}){
        // 『删除哦』
        objectPath.del(state.resume, path);
    },
    fuck(state, aaa,bbb){
      var xxx={'profile':{'name':'姓名','city':'城市','title':'工作岗位','birthday':'出生年月'},
      'workHistory':{'company':'公司','details':'公司细节'},
      'education':{'school':'学校','details':'学校细节',},
      'projects':{'name':'项目','details':'项目细节',},
      'awards':{'name':'获奖','details':'获奖细节',},
      'contacts':{'contact':'联系方式','details':'联系方式细节',}}
      return xxx['profile']['title'];
    }
  }
})
