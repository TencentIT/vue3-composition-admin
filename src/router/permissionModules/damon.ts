/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-11 15:13:20
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-22 15:07:51
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: '/damonPages',
    component: Layout,
    redirect: 'noredirect',
    name: 'damonPages',
    meta: {
      title: 'damonPages',
      icon: '#iconcomponent'
    },
    children: [
      {
        path: 'sticky',
        component: () =>
          import(
            /* webpackChunkName: "sticky" */ '@/views/components-demo/StickyDemo.vue'
          ),
        name: 'StickyDemo',
        meta: {
          title: 'sticky',
          noCache: true
        }
      },
      {
        path: 'draggable-list',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/damon-demo/MyDraggable.vue'
          ),
        name: 'DraggableListDemo',
        meta: {
          title: 'draggableList',
          noCache: true
        }
      },
      {
        path: 'my-test',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/damon-demo/MyTest.vue'
          ),
        name: 'MyTest',
        meta: {
          title: 'damonMyTest',
          noCache: true
        }
      }
    ]
  }
]

export default componentsRouter
