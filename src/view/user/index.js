import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Avatar,Row,Col} from 'antd';
// import data from './data';
import UserList from './userList';
import axios from 'axios';


class User extends Component {
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getDate(id);
    }
    shouldComponentUpdate(nextProps,nextState){
        let id = this.props.match.params.id;
        let nextId = nextProps.match.params.id;
        if(id !== nextId){
            this.getDate(nextId);
            return false;
        }
        return true;
    }
    getDate(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: 'USER_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then((res)=>{
                    dispatch({
                        type: 'USER_UPDATE_SUCC',
                        data: res.data
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type: 'USER_UPDATE_ERROR'
                    })
                })
        })
    }
    render(){
        // console.log(data);
        // let {avatar_url,loginname,score,create_at,recent_topics,recent_replies} = data.data;
        let {loading,data} = this.props;
        let {avatar_url,loginname,score,create_at,recent_topics,recent_replies} = data;
        return(
            <div className="wrap">
                <Avatar src={avatar_url} className="userAvatar" />
                <Row className="userInfo">
                    <Col md={8}>
                        用户名：{loginname}
                    </Col>
                    <Col md={8}>
                        积分：{score}
                    </Col>
                    <Col md={8}>
                        注册时间：{create_at.split('T')[0]}
                    </Col>
                </Row>

                <UserList
                    loading={loading}
                    title="最新创建话题"
                    data={recent_topics}
                 />
                 <UserList
                     loading={loading}
                     title="最新回复话题"
                     data={recent_replies}
                  />
            </div>
        )
    }
}

export default connect(state=>(state.user))(User);
