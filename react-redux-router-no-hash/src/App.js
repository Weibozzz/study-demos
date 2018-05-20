import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import Blog from './pages/blog';
import Header from './components/Header';

import { addTodo ,toggleComplete,setVisiblityFilter,asyncTest,VisibilityFilters} from './actions';

class App extends Component {
    render() {
        // App 接收 state 映射后的对象obj中的属性和 dispatch 传递给子组件
        const {dispatch,visibleTodos,visibilityFilter,testAsync} = this.props;
        console.log(this.props)
        return (
            <div className="App">
                <Header/>
                <AddTodo
                    onAddClick={text=>{
                        dispatch(addTodo(text))
                    }}
                    testAsync={data=>{
                        dispatch(testAsync(data))
                    }}
                />
                <TodoList
                todos={visibleTodos}
                testAsync={testAsync}
                onToggleComplete={index=>{
                    dispatch(toggleComplete(index))
                }}
                />
                <Footer
                    onSetVisible={filter=>{
                        dispatch(setVisiblityFilter(filter))
                    }}
                    filter={visibilityFilter}/>
            </div>
        );
    }
}
const selectTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            // js filter方法匹配 completed = true的todo 返回一个新数组
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            // js filter方法过滤掉 completed = false的todo 返回一个新数组
            return todos.filter(todo => !todo.completed);
    }
}
const select = (state) => {
    console.log(state)
    return {
        visibleTodos: selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        testAsync:state.testAsync
    }
}

export default connect(select)(App);
