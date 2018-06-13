function user(state={
    loading: true,
    data:{
        avator_url: '',
        create_at: '',
        loginname: '',
        score: '',
        recent_replies: [],
        recent_topics: []
    }
},action){
    switch(action.type){
        case 'USER_UPDATE':
            return{
                loading: true,
                data: state.data
            }
        case 'USER_UPDATE_SUCC':
            return{
                loading: false,
                data: action.data.data
            }
        case 'USER_UPDATE_ERROR':
            return{
                loading: true,
                data: {
                    author:{
                        loginname:"",
                        avator_url:""
                    },
                    replies:[],
                    reply_count:0,
                    create_at:"",
                    good:true
                }
            }
        default:
            return state;
    }
}
export default user;
