/**路由配置**/
export interface routesInfo{
  src:string,  // 路由
  path:string, // 文件路径
  children?:routesInfo[] //子路由
}


const routes:routesInfo[]  = [
  {
    path:"/",
    src:'pages/about', 
  },
  {
    path:"/news",
    src:'pages/news', 
  }
]



export default routes