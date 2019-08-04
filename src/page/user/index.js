import React from "react"
import { GetuserData } from '../../api/api';
import { Avatar, Icon } from 'antd';
import Slot from '../../components/slot'
import ContentList from '../../components/contentlist'
import './index.less'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userdata:[],
            loadding:true
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.getDate(id)
    }
    getDate(id) {
        GetuserData(id).then(res => {
            console.log(res.data)
            this.setState({
                userdata: res.data,
                loadding: false
            })
        })
    }
    render(){
        return (
            <div className="wrap user">
                <div className="sidebar">
                    <div className="cnode">
                        <div className="titles">
                            <p>个人信息</p>
                            <ul>
                                <li>
                                    <Avatar src={this.state.userdata.avatar_url} />
                                    <span>{this.state.userdata.loginname}</span>
                                    </li>
                                <li>积分:{this.state.userdata.score}</li>
                                <li></li>
                            </ul>
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
                        <Slot data={"用户详情"} />
                        <div className="user">
                            <ul>
                                <li>
                                    <Avatar src={this.state.userdata.avatar_url} />
                                    <span>{this.state.userdata.loginname}</span>
                                </li>
                                <li>积分:{this.state.userdata.score}</li>
                                <li>49个话题收藏</li>
                                <li>
                                    <Icon type="github" />
                                    <span>{this.state.userdata.githubUsername}</span>
                                </li>
                                <li>注册时间{this.state.userdata.create_at}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-list">
                        <div className="cnode">
                            <div className="titles">
                                <p>友情社区</p>
                            </div>
                            <ContentList
                                data={this.state.userdata.recent_replies}
                                loading={this.state.loading}
                                // onClick={this.menuClickHandle}
                            />
                        </div>
                        <div className="cnode">
                            <div className="titles">
                                <p>友情社区</p>
                            </div>
                            <ContentList
                                data={this.state.userdata.recent_topics.slice(0,4)}
                                loading={this.state.loading}
                            // onClick={this.menuClickHandle}
                            />
                        </div>
                    </div>
                </div>
            </div>	
        )
    }
}

export default User;