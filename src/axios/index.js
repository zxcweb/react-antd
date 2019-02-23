import Jsonp from 'jsonp';
import axios from 'axios';
import {Modal} from 'antd';

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
    static ajax(options){
        let loading;
        if(options.data&&options.data.isShowLoading!==false){
            loading = document.getElementById("ajaxLoading");
            loading.style.display = 'block';
        }
        let baseApi = 'https://www.easy-mock.com/mock/5c6f5c8cf5c55f016b1d7619/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:10000,
                params:(options.data&&options.data.params)||''
            }).then((res)=>{
                if(options.data&&options.data.isShowLoading!==false){
                    loading.style.display = 'none';
                }
                
                if(res.status == '200'){
                    if(res.data.code == '0'){
                        resolve(res.data)
                    }else{
                        Modal.error({
                            title:"提示",
                            content:res.data.msg
                        })
                    }
                }else{
                    reject(res.data)
                }
            })
        })
    }
}