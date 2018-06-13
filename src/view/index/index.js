import React,{Component} from 'react';
import {Row,Col} from 'antd';
import IndexMenu from './indexMenu';
import IndexList from './list';


class Index extends Component {
    render(){
        // console.log(this.props);
        let tab= this.props.match.params.id;
        // console.log(tab);
        return (
            <Row className="mainWrap">
                <Col md={6} xs={0}>
                    <div className="wrap">
                        <IndexMenu />
                    </div>
                </Col>
                <Col md={18} xs={24} className="indexList">

                    <IndexMenu changeHide="change-hide" />

                    <IndexList
                        tab={tab}
                    />
                </Col>
            </Row>
        )
    }
}

export default Index;
