import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {Menu} from 'antd';

var data = [
    {
        tab : "all",
        txt : "全部"
    },
    {
        tab : "good",
        txt : "精华"
    },
    {
        tab : "ask",
        txt : "问答"
    },
    {
        tab : "share",
        txt : "分享"
    },
    {
        tab : "job",
        txt : "招聘"
    },
    {
        tab : "dev",
        txt : "测试"
    }
]
class IndexMenu extends Component {
    constructor(arg){
        super(arg);
        let now = this.now(this.props.location);
        // console.log(now);
        this.state = {
            now
        }
    }
    now(location){
        let now = location.pathname.split('/')[2];
        return now;

    }
    shouldComponentUpdate(nextProps,nextState){
        let now = this.now(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return true;
        }
        return false;
    }
    render(){
        const {changeHide} = this.props;
        return(
            <Menu id="indexMenu" className={changeHide}
                selectedKeys={[this.state.now]}
                >
                {data.map((item)=>{
                    return(
                        <Menu.Item key={item.tab}>
                            <Link to={"/index/"+item.tab}>{item.txt}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
}

export default withRouter((props)=>{
    let {id,changeHide,location} = props;
    // console.log(props);
    return(
        <IndexMenu
            id={id}
            changeHide={changeHide}
            location={location}
        />
    )
});
