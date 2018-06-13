import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Card,Avatar} from 'antd';
import TxtTag from '../TxtTag'

class TxtDetails extends Component {
    render(){
        // console.log(data);
        let {loading,data} = this.props;
        const title = (
            <div>
                <h1>{data.title}</h1>
                <div>
                    <TxtTag data={data}></TxtTag>
                    <Avatar src={data.author.avatar_url}></Avatar>
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                    发表于:{data.create_at.split('T')[0]}
                </div>
            </div>
        )
        return (
                <Card
                    loading={loading}
                    title={title}
                    >
                    <div
                        dangerouslySetInnerHTML={{
                            __html : data.content
                        }}
                        ></div>
                </Card>
        )
    }
}

export default TxtDetails;
