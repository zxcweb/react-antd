import React,{Component} from 'react';
import {
    Card,Form,Input,Button,message, Icon,Checkbox
} from 'antd';

import './index.less'

const FormItem = Form.Item;
class Login extends Component{
    handleSubmit = () =>{
        const userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜表单密码为${userInfo.pwd}`)
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form-box">
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input
                                placeholder="请输入用户名"
                                type="text"
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="请输入密码"
                                type="password"
                            />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登 录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单">
                    <Form layout="horizontal" style={{width:"500px"}}>
                        <FormItem>
                            {
                                getFieldDecorator("userName",{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'用户名必须为5-10个字符'
                                        },
                                        {
                                            pattern:/^\w+$/g,
                                            message:'用户名必须为字母'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user"/>}
                                        placeholder="请输入用户名"
                                        type="text"
                                    />
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("pwd",{
                                    initialValue:'12345',
                                    rules:[]
                                })(
                                    <Input
                                        prefix={<Icon type="lock"/>}
                                        placeholder="请输入密码"
                                        type="password"
                                    />
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    initialValue: false,
                                    valuePropName:'checked',
                                    rules:[]
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" block onClick={this.handleSubmit}>登 录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login);