import React from 'react'
import Slot from '../../components/slot'
import Getstartlist from '../../components/getstartlist'
import './index.less'

class Api extends React.Component{
	render(){
		return(
			<div className="wrap getstart">
				<div className="sidebar">
					
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