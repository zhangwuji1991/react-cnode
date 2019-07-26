import React from 'react'
import { List, Avatar,Skeleton} from 'antd';
import './index.less'

class TopiRelpy extends React.Component{

	render(){
		return (
			<div className="demo-infinite-container topicreply">
				<div className="replylength">
					<span>{this.props.lengths}</span>回复
				</div>
		        <List
		            dataSource={this.props.replydata}
		            renderItem={(item,index) => (
		              <List.Item>
		                <Skeleton loading={this.props.loading} active avatar   >
		                  <List.Item.Meta
		                    avatar={<Avatar src={item.author.avatar_url} />}
		                    title={
			                    <p>
				                    <span className="author">{item.author.loginname}</span>
				                    <span className="indexs">{index+1}楼</span>
				                    <span className="create_time">{item.create_at}</span>
			                    </p>
		                    }
		                    description={<p dangerouslySetInnerHTML={{ __html: item.content }}  />}
		                  />
		                </Skeleton>
		              </List.Item>
		            )}
		        /> 
	        
	      	</div>
		)
	}
}

export default TopiRelpy