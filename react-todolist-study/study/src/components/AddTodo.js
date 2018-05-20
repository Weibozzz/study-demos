import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {asyncTest} from '../actions';
var url = 'http://datainfo.duapp.com/shopdata/getclass.php';

function fetchAction(url) {

    return dispatch => {
        fetch(url).then(res => {
            return res.json();
        }).then(data=>{
            console.log(data)
            dispatch(asyncTest(data))
        })
    }
}

class AddTodo extends React.Component{
    
    componentDidMount(){
    }

    handleClick(e){
        const input = this.refs.input;
        const txt = input.value;
        this.props.onAddClick(txt)
        input.value=''
        this.props.dispatch(fetchAction(url))
    }

    render () {
        return (
            <div className='todo-add'>
                <input type='text' ref='input' placeholder=' 请输入内容' />
                <button onClick={(e) => {
                    this.handleClick(e);
                    e.preventDefault();
                }}>
                    添加待办项
                </button>
            </div>
        )
    }
}
export default connect()(AddTodo)