import { useEffect, useMemo } from 'react'
import { useLinkClickHandler, useRoutes } from 'react-router-dom'
import {RouteObject} from 'react-router'
import AsyncComponent from '@src/components/AsyncComponent'
import routes, { routesInfo } from './router'
import 'antd/dist/antd.css'

import './App.css'


// 引入src下全部.tsx文件 https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob('../**/*.tsx');
console.log(modules)
// 构建routes
const generateRoutes = (routes: routesInfo[]): RouteObject[] => {
  return routes.map(({ src, children,...ret }) => ({
    element: <AsyncComponent loader={modules[`./${src}.tsx`]} />,
    children: children && generateRoutes(children),
    ...ret
  }));
};


function App() {
  const Routes= useMemo(() => generateRoutes(routes), [routes]);
  return useRoutes(Routes)
}

export default App

