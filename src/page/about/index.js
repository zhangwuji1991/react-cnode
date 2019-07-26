import React from 'react'
import Slot from '../../components/slot'
import './index.less'

class About extends React.Component{
	render(){
		return(
			<div className="wrap about">
				<div className="sidebar">
					
				</div>
				<div className="content">
					<div className="content-top">
						<Slot data={"关于"}/>
					</div>
	                <div className="content-list">
						<div>
							<h1>关于</h1>
							<ul>
								<li>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</li>
								<li>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</li>
								<li>CNode 的 SLA 保证是，一个9，即 90.000000%。</li>
								<li>社区目前由 @alsotang 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a></li>
								<li>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></li>
							</ul>
						</div>
						<div>
							<h1>移动客户端</h1>
							<ul>
								<li>客户端由 @soliury 开发维护。</li>
								<li>源码地址： <a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a></li>
								<li>立即体验 CNode 客户端，直接扫描页面右侧二维码。</li>
								<li>另，安卓用户同时可选择： <a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</li>
							</ul>
						</div>
						<div>
							<h1>友情链接</h1>
						</div>
						<div>
							<h1>LOGO</h1>
							<ul>
								<li>白底： <a href="https://cnodejs.org/public/images/cnodejs.svg">/public/images/cnodejs.svg</a></li>
								<li>黑底： <a href="https://cnodejs.org/public/images/cnodejs_light.svg">/public/images/cnodejs.svg</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default About