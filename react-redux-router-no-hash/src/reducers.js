
/*reducer 是纯方法
* 传入旧状态和action
* 返回新状态
*/
import { combineReducers } from 'redux'
import { TEST_ASYNC,GET_TOTAL,GET_DETAIL,GET_ADMIN_BLOG,POST_ADMIN_DETAIL,POST_ARTICLE,GET_LIFE ,GET_COMMENTS} from './actions'

// 异步
const testAsync = (state=[],action)=>{
    switch (action.type) {
        case TEST_ASYNC:
            return action.data
        default:
            return state
    }
}
const total = (state=[],action)=>{
    switch (action.type) {
        case GET_TOTAL:
            return action.data
        default:
            return state
    }
}
const detail = (state=[],action)=>{
    switch (action.type) {
        case GET_DETAIL:
            return action.data
        default:
            return state
    }
}
const comments = (state=[],action)=>{
    switch (action.type) {
        case GET_COMMENTS:
            return action.data
        default:
            return state
    }
}
const life = (state=[],action)=>{
    switch (action.type) {
        case GET_LIFE:
            return action.data
        default:
            return state
    }
}
const adminBlog = (state=[],action)=>{
    switch (action.type) {
        case GET_ADMIN_BLOG:
            return action.data
        default:
            return state
    }
}
const adminDetail = (state=[],action)=>{
    switch (action.type) {
        case POST_ADMIN_DETAIL:
            return action.data
        default:
            return state
    }
}
//发表文章
const article = (state=[],action)=>{
    switch (action.type) {
        case POST_ARTICLE:
            return action.data
        default:
            return state
    }
}
// 不同响应合并成一个reducer
const myBlog = combineReducers({
    testAsync,
    total,
    detail,
    life,
    adminBlog,
    adminDetail,
    article,
    comments
})

export default myBlog
