// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router/routes'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let xmlhttprequst = new XMLHttpRequest()
    xmlhttprequst.open('GET', '/schoolManager/isLogin.json', true)
    xmlhttprequst.send()

    xmlhttprequst.onreadystatechange = () => {
      if (xmlhttprequst.readyState === 4) {
        if (xmlhttprequst.status === 200) {
          const message = JSON.parse(xmlhttprequst.responseText)
          if (message.code === 200) {
            next()
          } else {
            next({
              path: '/login',
              query: {
                redirect: to.fullPath
              }
            })
          }
        } else {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        }
      }
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
