// action类型名称
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TEST_ASYNC = 'TEST_ASYNC';

// 过滤类型常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL', // 全显示
    SHOW_COMPLETED: 'SHOW_COMPLETED', // 只显示完成
    SHOW_ACTIVE: 'SHOW_ACTIVE' // 只显示未完成
};

// 用户添加待办项 action函数
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text,
    }
}
export const toggleComplete = index =>{
    return {
        type: COMPLETE_TODO,
        index
    }
}

export const setVisiblityFilter = filter =>{
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

// 异步请求
export const asyncTest = data =>{
    return {
        type:TEST_ASYNC,
        data
    }
};