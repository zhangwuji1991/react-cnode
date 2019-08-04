import React from 'react'
import Slot from '../../components/slot'
import { Button } from 'antd';
import Getstartlist from '../../components/getstartlist'
import './index.less'

class Api extends React.Component{
	render(){
		return(
			<div className="wrap getstart">
				<div className="sidebar">
					<div className="cnode">
						<div className="inner">
							<p>CNode：Node.js专业中文社区</p>
							<div>
								您可以<a href="/signin">登录</a>或<a href="/signup">注册</a>, 也可以
        						<Button type="primary" htmlType="button" className="githubbtn">
									通过 GitHub 登录
						          </Button>
							</div>
						</div>
					</div>
					<div className="cnode">
						<div className="inner ads">
							<img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" />
							<img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" />
							<img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt="" />
						</div>
					</div>
					<div className="cnode">
						<div className="titles">
							<p>友情社区</p>
						</div>
						<div className="ads imgs">
							<img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="" />
							<img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="" />
							<img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="" />
							<img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="" />
						</div>
					</div>
				</div>
				<div className="content">
					<div className="content-top">
						<Slot data={"Node.js 新手入门"}/>
					</div>
	                <div className="content-list">
						<Getstartlist />
					</div>
				</div>
			</div>	
		)
	}
}

export default Api