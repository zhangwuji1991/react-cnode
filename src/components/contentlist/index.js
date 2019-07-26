import React from 'react'
import { List, Avatar,Skeleton} from 'antd';
import {withRouter} from 'react-router-dom'
import './index.less'

class ContentList extends React.Component {

  render() {

    return (
      <div className="demo-infinite-container">
          <List
            dataSource={this.props.data}
            renderItem={item => (
              <List.Item>
                <Skeleton loading={this.props.loading} active avatar   >
                  <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar_url} />}
                    title={
                      <span  onClick={()=>{
                        this.props.history.push(`/topic/${item.id}`)
                      }}>{item.title}</span>
                    }
                    description={item.create_at}
                  />
                  <div className="reply">{item.reply_count}/{item.visit_count}</div>
                </Skeleton>
              </List.Item>
            )}
          /> 
        
      </div>
    ); 
  }
}

export default withRouter(ContentList);