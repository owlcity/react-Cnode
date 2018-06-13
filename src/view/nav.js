import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'

class Nav extends Component {
    constructor(arg){
        super(arg);
        // console.log(this.props);
        let nowKey = this.getKey(this.props.location);
        this.state = {
            nowKey
        }
    }
    getKey(location){
        // console.log(location);
        let nowKey = location.pathname.split('/')[1];
        // console.log(nowKey);
        return nowKey;
    }
    shouldComponentUpdate(nextProps){
        let nowKey = this.getKey(nextProps.location);
        if(nowKey !== this.state.nowKey){
            this.setState({
                nowKey
            })
            return false;
        }
        return true;
    }
    render(){
        const {mode} = this.props;
        return (
            <Menu className="nav" mode={mode}
                selectedKeys={[this.state.nowKey]}
                >
                <Menu.Item key="index">
                    <Link to="/index/all">
                        <Icon type="home" />
                        首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Link to="/book">
                        <Icon type="book" />
                        教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">
                        <Icon type="info-circle-o" />
                    关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export default withRouter((props)=>{
    // console.log(props);
    let {mode,id,location} = props;
    return(
        <Nav
            id={id}
            mode={mode}
            location={location}
         />
    )
})
