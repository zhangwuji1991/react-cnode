import React from 'react'
import './index.less'

class TopicList extends React.Component{

	render(){

		return (
		
			<div className="topic_content" 

				dangerouslySetInnerHTML = {{ __html:this.props.topicdata }}
			>

			</div>
			
		)
	}
}

export default TopicList