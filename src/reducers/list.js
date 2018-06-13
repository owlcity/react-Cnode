function list(state={data:[],loading:true},action){
    switch(action.type){
        case 'LIST_UPDATE':
            return {
                loading: true,
                data: action.data
            }
        case 'LIST_UPDATE_SUCC':
            // console.log(action.data);
            return {
                loading:false,
                data: action.data.data
            }
        case 'LIST_UPDATE_ERROR':
            return {
                loading:false,
                data: []
            }
        default:
            return state;
    }
}
export default list;
