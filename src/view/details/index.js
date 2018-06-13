import React,{Component} from 'react';
// import data from './data';
import {connect} from 'react-redux';
import axios from 'axios';
import TxtDetails from './TxtDetails';
import ReplyList from './ReplyList';

class Details extends Component {
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getDate(id);
    }
    getDate(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: 'DETAILS_UPDATE'
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type: 'DETAILS_UPDATE_SUCC',
                        data: res.data
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type: 'DETAILS_UPDATE_ERROR'
                    })
                })
        })
    }

    render(){
        console.log(this.props);
        let {loading,data} = this.props;
        return (
            <div className="wrap">
                <TxtDetails
                    loading={loading}
                    data={data}
                 />
             <ReplyList
                loading={loading}
                replies={data.replies}
                replycount={data.reply_count}
             />
            </div>
        )
    }
}

export default connect(state=>(state.details))(Details);
