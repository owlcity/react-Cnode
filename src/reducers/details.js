function details(state={
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
},action){
    switch(action.type){
        case 'DETAILS_UPDATE':
            return{
                loading: true,
                data: state.data
            }
        case 'DETAILS_UPDATE_SUCC':
            return{
                loading: false,
                data: action.data.data
            }
        case 'DETAILS_UPDATE_ERROR':
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
export default details;
