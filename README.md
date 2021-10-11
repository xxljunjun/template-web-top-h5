### 可用作 H5 页面的开发

#### 一、创建项目

- npm install @vue/cli -g
- vue create webtemplate

#### 二、配置路由

- npm install vue-router -S

#### 三、配置状态管理

- npm install vuex -S

#### 四、配置 sass

- npm install sass-loader -D
- npm install node-sass -D

#### 五、配置 axios

- npm install axios -S

#### 六、安装 i18n 国际化

- npm install vue-i18n --save
- //在 i18n.js 中
  import Vue from 'vue';
  import VueI18n from 'vue-i18n';
  import zh from '@/i18n/zh';
  import en from '@/i18n/en';
  Vue.use(VueI18n);
  const messages = {
  zh, // 这是 zh: zh 的简写，后面同理
  en,
  };
  export default new VueI18n({
  locale: 'zh',
  messages,
  });
- //在 main.js 中
  import i18n from '@/utils/i18n';
  new App(
  i18n,
  ).$mount()
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去 this.\$i18nMsg.xxx 去访问
- 在 i18n 文件夹中
  zh.js
  en.js
  //this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'

#### 九、配置 vue.confige

- 配置别名
- 跨域请求代理
- 请求添加时间戳和 cdn 前缀
