import React, { Component } from "react";
import { Form, Select } from "antd";

const Option = Select.Option;
const FormItem = Form.Item;

class OpenCityForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        span:5
      },
      wrapperCol:{
        span:19
      }
    }
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
          {getFieldDecorator("city_id",{
            initailValue:'1'
          })(
            <Select placeholder="北京市">
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {getFieldDecorator("mode",{
            initailValue:"1"
          })(
            <Select placeholder="自营">
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {getFieldDecorator("op_mode",{
            initailValue:'1'
          })(
            <Select placeholder="指定停车点">
              <Option value="1">指定停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create({})(OpenCityForm);
