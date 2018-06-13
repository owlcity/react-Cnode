import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Card,Avatar,List} from 'antd';

class ReplyList extends Component {
    render(){
        let {loading,replycount,replies} = this.props;
        return (
            <Card
                loading={loading}
                title={replycount+"条回复"}
                type="inner"
            >
                <List
                    itemLayout="vertical"
                    dataSource={replies}
                    renderItem={(item)=>(
                        <List.Item
                            key={replies.id}
                            extra={item.ups.length>0 ? <span>有{item.ups.length}人觉得这条很赞</span> : ""}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} />}
                                description={
                                    <div><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                    <span>发表于{item.create_at.split('T')[0]}</span>
                                    </div>
                                }
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html : item.content
                                }}
                            ></div>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        )
    }
}

export default ReplyList;
