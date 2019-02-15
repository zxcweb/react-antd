import React,{ Component } from 'react';
import menuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class NavLeft extends Component{
    state = {
        menuTreeNode:[]
    }
    componentDidMount(){
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Item key={item.key}> 
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Item>
        })
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo"/>    
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {/* <SubMenu key="sub1" title={<span><Icon type="mail"></Icon>Nav</span>}>
                        <Item key="1">11</Item>
                        <Item key="2">22</Item>
                        <Item key="3">33</Item>
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default NavLeft;