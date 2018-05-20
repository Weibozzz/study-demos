
/*reducer 是纯方法
* 传入旧状态和action
* 返回新状态
*/
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO,SET_VISIBILITY_FILTER ,VisibilityFilters,TEST_ASYNC} from './actions'
const {SHOW_ALL} = VisibilityFilters;
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// 异步
const testAsync = (state=[],action)=>{
    switch (action.type) {
        case TEST_ASYNC:
            return action.data
        default:
            return state
    }
}

// 待办项 响应
const todos = (state = [], action) => {
    switch (action.type) {
        // 添加待办事项
        case ADD_TODO:
            // 使用扩展运算符...[{text:"" , completed: ""}]
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                }
            ]
        case COMPLETE_TODO:
            return state.map((v, index) =>
                (index === action.index)
                    ? {...v, completed: !v.completed}
                    : v
            )
        default:
            return state
    }
}

// 不同响应合并成一个reducer
const todoApp = combineReducers({
    todos,
    visibilityFilter,
    testAsync
})

export default todoApp
