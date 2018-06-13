import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {List,Avatar} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
// import data from './data';
import TxtTag from '../TxtTag'

class IndexMenu extends Component {
    constructor(arg){
        super(arg);
        let tab = this.props.tab;
        // console.log(this.props);
        this.state = {
            page : 1
        }
        this.getData(tab,this.state.page);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page);
            return false;
        }
        // console.log(nextProps.tab);
        if(this.props.tab !== nextProps.tab){
            this.setState({page:1});
            this.getData(nextProps.tab,1);

            return false;
        }
        return true;
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "LIST_UPDATE"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
            .then((res)=>{
                // console.log(res.data);
                dispatch({
                    type: 'LIST_UPDATE_SUCC',
                    data: res.data
                })
            })
            .catch((error)=>{
                // console.log(error);
                dispatch({
                    type: 'LIST_UPDATE_ERROR',
                    data: error
                })
            })
        })
    }
    render(){
        // 按照接口需要参数：loading data tab page
        // console.log(this.props);
        let {loading,data} = this.props;
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 1000,
            onChange: (current)=>{
                // console.log(current);
                this.setState({
                    page : current
                })
            }
        }
        return(
            <List
                loading={loading}
                dataSource={data}
                pagination={loading ? false :pagination}
                renderItem={item=>(
                    <List.Item
                        actions={
                            ["回复"+ item.reply_count,
                            "访问"+item.visit_count
                        ]}
                        >
                        <List.Item.Meta
                      avatar={<Avatar src={item.author.avatar_url} />}
                      title={
                          <div>
                            <TxtTag data={item} />
                            <Link             to={"/details/"+item.id}>
                            {item.title}
                          </Link>
                          </div>
                      }
                      description={(
                          <p>
                            <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                            发表于:{item.create_at.split('T')[0]}
                          </p>
                      )}
                    />
                  </List.Item>
                )}

            >

            </List>
        )
    }
}
export default connect(state=>state.list)(IndexMenu)
