import React from 'react'
import Slot from '../../components/slot'
import { Form,Input, Button} from 'antd';
import './index.less'

class Login extends React.Component{

	render(){
	    const formItemLayout = {
	      labelCol: {
	        xs: { span: 4 },
	        sm: { span: 4 },
	      },
	      wrapperCol: {
	        xs: { span: 18 },
	        sm: { span: 18 },
	      },
	    };
		return(
			<div className="wrap login">
				<div className="sidebar">
					{/* <div className="cnode">
						<div className="inner">
							<p>关于</p>
							<ul>
								<li>如何从开发流程层面实现更高效的持续交付</li>
								<li>如何从开发流程层面实现更高效的持续交付</li>
								<li>如何从开发流程层面实现更高效的持续交付</li>
								<li>如何从开发流程层面实现更高效的持续交付</li>
							</ul>
						</div>
					</div> */}
				</div>
				<div className="content">
					<div className="content-top">
						<Slot data={"登录"}/>
					</div>
	                <div className="content-list">
						<div className="login-wrap">
							<div className="loginfrom">
								<Form {...formItemLayout} onSubmit={this.handleSubmit}>
									<Form.Item label="用户名">
									<Input />
									</Form.Item>
									<Form.Item label="密码" hasFeedback>
									<Input.Password />
									</Form.Item>
									<Form.Item label="">
									<Button type="primary" htmlType="button" className="btn">
										登录
									</Button>

									<Button type="primary" htmlType="button" className="githubbtn">
										通过 GitHub 登录
									</Button>
									<a href="###">忘记密码？</a>
									</Form.Item>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default Form.create()(Login)