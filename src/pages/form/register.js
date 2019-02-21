import React,{Component} from 'react';
import {
    Card,Form,Input,Button,message, Icon,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,InputNumber
} from 'antd';
import moment from 'moment';
import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends Component{
	state = {
		userImg:''
	}
    handleSubmit = () =>{
        const userInfo = this.props.form.getFieldsValue();
		console.log(userInfo)
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜表单密码为${userInfo.pwd}`)
            }
        })
    }
	getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}
	handleChange = (info) => {
		if (info.file.status === 'uploading') {
		this.setState({ loading: true });
		return;
		}
		if (info.file.status === 'done') {
		// Get this url from response in real world.
		this.getBase64(info.file.originFileObj, imageUrl => this.setState({
			userImg:imageUrl,
			loading: false,
		}));
		}
	}
    render(){
        const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			// 标题
			labelCol:{
				xs:24,
				sm:4
			},
			// 文本框
			wrapperCol:{
				xs:24,
				sm:12
			}
		}
		const offsetLayout = {
			wrapperCol:{
				xs:24,
				sm:{
					span:12,
					offset:4
				}
			}
		}
        return (
            <div className="form-box">
                <Card title="注册表单">
                    <Form layout="horizontal">
						<FormItem label="用户名" {...formItemLayout}>
							{
                                getFieldDecorator("userName",{
                                    initialValue:'',
                                    rules:[
										{
											required:true,
											message:'用户名不能为空'
										}
									]
                                })(
                                    <Input
                                        placeholder="请输入用户名"
                                        type="text"
                                    />
                                )
                            }
						</FormItem>
						<FormItem label="密码"  {...formItemLayout}>
							{
                                getFieldDecorator("pwd",{
                                    initialValue:'',
                                    rules:[{
										required:true,
										message:'密码不能为空'
									}]
                                })(
                                    <Input
                                        placeholder="请输入密码"
                                        type="password"
                                    />
                                )
                            }
						</FormItem>
						<FormItem label="性别" {...formItemLayout}>
							{
                                getFieldDecorator("sex",{
                                    initialValue:'1',
                                    rules:[]
                                })(
									<Radio.Group>
										<Radio value="1">男</Radio>
										<Radio value="2">女</Radio>
									</Radio.Group>
                                )
                            }
						</FormItem>
						<FormItem label="年龄" {...formItemLayout}>
							{
                                getFieldDecorator("age",{
                                    initialValue:'18',
                                    rules:[]
                                })(
									<InputNumber/>
                                )
                            }
						</FormItem>
						<FormItem label="当前状态" {...formItemLayout}>
							{
                                getFieldDecorator("state",{
                                    initialValue:'2',
                                    rules:[]
                                })(
									<Select>
										<Option value="1">咸鱼一条</Option>
										<Option value="2">初出创业</Option>
										<Option value="3">风华浪子</Option>
										<Option value="4">北大才子</Option>
										<Option value="5">公司总裁</Option>
									</Select>
                                )
                            }
						</FormItem>
						<FormItem label="爱好" {...formItemLayout}>
							{
                                getFieldDecorator("hobby",{
                                    initialValue:["2","5"],
                                    rules:[]
                                })(
									<Select mode="multiple">
										<Option value="1">爬上</Option>
										<Option value="2">跑步</Option>
										<Option value="3">旅游</Option>
										<Option value="4">收藏</Option>
										<Option value="5">看书</Option>
										<Option value="6">泡妞</Option>
										<Option value="7">唱歌</Option>
									</Select>
                                )
                            }
						</FormItem>
						<FormItem label="是否已婚" {...formItemLayout}>
							{
                                getFieldDecorator("isW",{
									valuePropName:"checked",
                                    initialValue:false,
                                    rules:[]
                                })(
									<Switch/>
                                )
                            }
						</FormItem>
						<FormItem label="生日" {...formItemLayout}>
							{
                                getFieldDecorator("borth",{
                                    initialValue:moment('2018-08-08'),
                                    rules:[]
                                })(
									<DatePicker
										showTime
										format="YYYY-MM-DD"
									/>
                                )
                            }
						</FormItem>
						<FormItem label="联系地址" {...formItemLayout}>
							{
                                getFieldDecorator("address",{
                                    initialValue:'北京市',
                                    rules:[]
                                })(
									<TextArea
										autosize={
											{
												minRows:3
											}
										}
									/>
                                )
                            }
						</FormItem>
						<FormItem label="早起时间" {...formItemLayout}>
							{
                                getFieldDecorator("time")(
									<TimePicker
										showTime
										format="HH:mm:ss"
									/>
                                )
                            }
						</FormItem>
						<FormItem label="上传照片" {...formItemLayout}>
							{
                                getFieldDecorator("userImg")(
									<Upload 
										listType="picture-card"
										showUploadList={false}
										action="//jsonplaceholder.typicode.com/posts/"
										onChange={this.handleChange}
									>
										{this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
									</Upload>
                                )
                            }
						</FormItem>
						<FormItem {...offsetLayout}>
							{
                                getFieldDecorator("isRead")(
									<Checkbox>
										我已经阅读过
										<a href="#">协议</a>
									</Checkbox>
                                )
                            }
						</FormItem>
						<FormItem {...offsetLayout}>
							<Button type="primary" onClick={this.handleSubmit}>注册</Button>
						</FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);