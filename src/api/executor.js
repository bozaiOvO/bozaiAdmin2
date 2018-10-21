import request from './request'
export function getExecutors(page){
  return request({
    url:'/api',
    method:'get',
    params:{
      _gp:'executor',
      _mt:'getExecutors',
      page
    }
  })
}
export function addClass(content,title,description){
  return request({
    url:'api',
    method:'get',
    params:{
      _gp:'executor',
      _mt:'addClass',
      content,
      title,
      description
    }
  })
}
export function reloadClass(uuid,content,title,description){
  return request({
    url:'api',
    method:'get',
    params:{
      _gp:'executor',
      _mt:'reloadClass',
      uuid,
      content,
      title,
      description
    }
  })
}
export function getExecutorContent(uuid){
  return request({
    url:'api',
    method:'get',
    params:{
      _gp:'executor',
      _mt:'getExecutorContent',
      uuid
    }
  })  
}