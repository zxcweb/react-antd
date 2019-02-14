import Jsonp from 'jsonp';
export default class Axios{
    static jsonp(options){
        return new Promise((res,rej)=>{
            Jsonp(options.url,{
                param:'callback'
            },(err,result)=>{
                if(result.status === 'success'){
                    res(result)
                }else{
                    rej(result.message)
                }
            })
        })
    }
}