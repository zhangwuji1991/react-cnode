import React from 'react'
import { Gettopic } from '../../api/api';
import Navlist from '../../components/list'
import ContentList from '../../components/contentlist'
import {Pagination} from 'antd';
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