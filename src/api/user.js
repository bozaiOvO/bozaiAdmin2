import request from './request'
//注册接口
export function yzm(phone){
    return request({
        url:'/api',
        params:{ 
            _gp:'user',
            _mt:'sendVerifyCode', 
            phone
        }
    })
} 
export function register(phone,password,verifyCode){
    return request({
        url:'/api',
        method: 'get', 
        params:{
            _gp:'user',
            _mt:'register',
            phone,
            password,
            verifyCode
        }
    })
}
export function login(phone,password){
    return request({
        url:'/api',
        params:{
            _gp:'user',
            _mt:'login',
            phone,
            password
        }
    })
}
export function getMsg(_gp,_mt){
   return request({
        url:'/api',
        method:'get',
        params:{
            _gp,
            _mt
        }
    })
}
export function getMsgDesc(page){
    return request({
        url:'/api',
        method:'get',
        params:{
            _gp:'user',
            _mt:'getUserNotifyPage',
            page
        }
    })
}
export function readMsg(notifyIds){
    return request({
        url:'/api',
        method:'get',
        params:{
            _gp:'user',
            _mt:'markNotifyRead',
            notifyIds
        }
    })
}