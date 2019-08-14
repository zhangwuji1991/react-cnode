import React from 'react'
import { List, Avatar,Skeleton} from 'antd';
import {withRouter} from 'react-router-dom'
import {handleDate} from '../../util'
import './index.less'

class UserList extends React.Component {

  render() {
    return (
      <div className="demo-infinite-container">
      		<List
	            dataSource={this.props.data}
	            renderItem={item => (
	              <List.Item>
	                <Skeleton loading={this.props.loading} active avatar   >
	                  <List.Item.Meta
	                    avatar={
	                      <Avatar src={item.author.avatar_url} 
	                        onClick={() => {
	                          this.props.history.push(`/user/${item.author.loginname}`)
	                        }}/>
	                    }
	                    title={
	                      <span  onClick={()=>{
	                        this.props.history.push(`/topic/${item.id}`)
	                      }}>{item.title}</span>
	                    }
	                    description={item.create_at}
	                  />
	                  <div className="reply">{handleDate(item.last_reply_at)}</div>
	                </Skeleton>
	              </List.Item>
	            )}
	         /> 
      </div>
    ); 
  }
}

export default withRouter(UserList);