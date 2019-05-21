import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import question from '@/components/question'
import score from '@/components/score'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//  	//根路径
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
     {
    	//根路径
      path: '/',
      name: 'home',
      component: home
    },
    {
    	//根路径
      path: '/question',
      name: 'question',
      component: question
    },
    {
    	//根路径
      path: '/score',
      name: 'score',
      component: score
    },
  ]
})
