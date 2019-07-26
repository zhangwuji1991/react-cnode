import React from 'react'
import Slot from '../../components/slot'
import { Form,Input, Button} from 'antd';
import './index.less'

class Login extends React.Component{

	render(){
	    const formItemLayout = {
	      labelCol: {
	        xs: { span: 6 },
	        sm: { span: 6 },
	      },
	      wrapperCol: {
	        xs: { span: 18 },
	        sm: { span: 18 },
	      },
	    };
		return(
			<div className="wrap register">
				<div className="sidebar">
					
				</div>
				<div className="content">
					<div className="content-top">
						<Slot data={"注册"}/>
					</div>
	                <div className="content-list">
						<div className="register-wrap">
							<div className="authfrom">
							<Form {...formItemLayout} onSubmit={this.handleSubmit}>
								<Form.Item label="通过 GitHub 帐号">
						          <Button type="primary" htmlType="button">
						            注册旧账号
						          </Button>
						        </Form.Item>
						        <Form.Item>
						        	或者
						        </Form.Item> 
						        <Form.Item label="用户名">
						          <Input />
						        </Form.Item>
						        <Form.Item label="密码" hasFeedback>
						          <Input.Password />
						        </Form.Item>
						        <Form.Item label="">
						          <Button type="primary" htmlType="button" className="btn">
						            关联旧账号
						          </Button>
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