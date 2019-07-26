import React from 'react'
import { Breadcrumb } from 'antd';
import {withRouter} from 'react-router-dom'
import './index.less'

class Slot extends React.Component{
	render(){
		return (
			<div className="slots">				
				<Breadcrumb>
				    <Breadcrumb.Item>
				      <span 
				      	className="home"
				      	onClick={()=>{
				      	this.props.history.push('/index')
				      }}>
				      主页</span>
				    </Breadcrumb.Item>
				    <Breadcrumb.Item>
				   		<span>{this.props.data}</span>
				    </Breadcrumb.Item>
				  </Breadcrumb>
			</div>
		)
	}
}

export default withRouter(Slot)