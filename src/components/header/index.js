import React from 'react'
import './index.less'
import Navlist from '../list'
import logo from './cnodejs_light.svg'
import { Input } from 'antd';
import {withRouter} from 'react-router-dom'

const { Search } = Input;

class Header extends React.Component{
	
	constructor(props){
		super(props)
		this.state=({
			navlist:[
				{
				    name: '首页',
				    route: '/index'
				},
				{
				    name: '新手入门',
				    route: '/getstart'
				},
				{
				    name: 'API',
				    route: '/api'
				},
				{
				    name: '关于',
				    route: '/about'
				},
				{
				    name: '注册',
				    route: '/auth'
				},
				{
				    name: '登录',
				    route: '/login'
				},
			]
		})
		this.menuClickHandle = this.menuClickHandle.bind(this)
	}
	menuClickHandle(e){
		this.props.history.push(e.route)
	}
 	render(){
 		return (
 			<div className="header">
 				<div className="header-inner">
 					<div className="container">
 						<div className="header-left">
	 					    <img className="brand" src={logo} alt="" />
	 					    <Search
	 					      className="search"
						      placeholder="input search text"
						      onSearch={value => console.log(value)}
						      style={{ width: 180,height:30 }}
							/>
	 					</div>
	 					<div className="header-right">
							<Navlist 
					          data={this.state.navlist} 
					          selectAvatar={this.menuClickHandle}/>
	 					</div>
 					</div>
 				</div>
 			</div>
 		)
 	}
}

export default withRouter(Header)