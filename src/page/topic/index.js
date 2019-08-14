import React from 'react' 
import { GettopicData } from '../../api/api';
import {handleDate} from '../../util'
import TopicList from '../../components/topiclist'
import Topicreply from '../../components/topicreply'
import './index.less'

class Topic extends React.Component{

	constructor(props){
		super(props)
		this.state={
			datalist:[],
			lengths:0,
			author:[]
		}
	}
	componentDidMount(){
        this.getDate()
    }
   
    getDate(){
    	const id = this.props.match.params.id
    	GettopicData(id).then(res=>{
        	this.setState({
        		datalist: res.data,
        		lengths:res.data.replies.length,
        		author:res.data.author.loginname
        	})
        })
    }
	
	render(){
		
		return (

			<div className="topic wrap">
				<div className="sidebar">
					
				</div>
				<div className="content">
					<div className="content-top">
						<div className="topic_header">
     	 					<div className="topic_full_title">
								<span className="put_top">置顶</span>
								<span>{this.state.datalist.title}</span>
					      	</div>
						    <div className="changes">
						        <span>
						          {handleDate(this.state.datalist.create_at)}
						        </span>
						        <span>
						          作者 <a href="/user/atian25">{this.state.author}</a>
						        </span>
						        <span>{this.state.datalist.visit_count} 次浏览</span>
						        <span> 来自 {this.state.datalist.tab}</span>
						    </div>
						</div>
					</div>
	                <div className="content-list">
						<TopicList topicdata={this.state.datalist.content} />
						<Topicreply lengths={this.state.lengths} replydata={this.state.datalist.replies} />
					</div>
				</div>
			</div>
		)
	}
}

export default Topic