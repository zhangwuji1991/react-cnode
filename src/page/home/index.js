import React from 'react'
import { Gettopic } from '../../api/api';
import Navlist from '../../components/list'
import ContentList from '../../components/contentlist'
import { Pagination, Button} from 'antd';
import './index.less'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			navlist:[
				{
				    name: '全部',
				    type: ''
				},
				{
				    name: '精华',
				    type: 'good'
				},
				{
				    name: '分享',
				    type: 'share'
				},
				{
				    name: '问答',
				    type: 'ask'
				},
				{
				    name: '招聘',
				    type: 'job'
				},
				{
				    name: '客户端测试',
				    type: 'dev'
				}
			],
			datalist:[],
			types:'',
			loading: true
		}
		this.navClickHandle = this.navClickHandle.bind(this)
	}
	componentDidMount(){
        this.getDate(this.state.types)
    }
    navClickHandle(e){
    	this.setState({
    		types: e.type,
    		loading:true
    	})
    	this.getDate(e.type)
    }
    getDate(type){
    	Gettopic(type).then(res=>{
        	this.setState({
        		datalist: res.data,
        		loading:false
        	})
        })
    }
	render(){
		return(
			<div className="home wrap">
				<div className="sidebar">
					<div className="cnode">
						<div className="inner">
							<p>CNode：Node.js专业中文社区</p>
							<div>
								您可以<a href="/login">登录</a>或<a href="/auth">注册</a>, 也可以
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
							<p>无人回复的话题</p>
						</div>
						<div className="plist">
							<p>使用 elev 定时部署 Let's Encrypt 通过阿...</p>
							<p>coolie PK webpack 之三：模块构建</p>
							<p>javascript 模块加载器——coolie</p>
							<p>howdo——如何做，一个简易的异步流程</p>
							<p>STATIC TRUSTED SERVER => sts</p>
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
					<div className="cnode">
						<div className="inner ermimg">
							<p>客户端二维码</p>
							<img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" />
						</div>
					</div>
				</div>
				<div className="content">
					<div className="content-top">
						<Navlist 
				          data={this.state.navlist} 
				          selectAvatar={this.navClickHandle}
					    />
					</div>
					
		                <div className="content-list">
							<ContentList 
					          data={this.state.datalist}
					          loading={this.state.loading}
					          onClick={this.menuClickHandle}
						    />
						</div>
						<div className="pagination">
							<Pagination defaultCurrent={1} total={60} />
						</div>
				</div>
			</div>
		)
	}
}

export default Home