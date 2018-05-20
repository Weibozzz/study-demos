import React, { PropTypes } from 'react'


class TodoList extends React.Component {

    render () {
        console.log(this.props)
        return (
            <div className='todo-list'>
                <ul>
                    {
                        this.props.todos.map((v,index)=>{
                            return  <li
                                key={index}
                                style={
                                    {
                                        textDecoration:v.completed?'line-through':'none',
                                        cursor:v.completed?'default':'pointer'
                                    }
                                }
                                onClick={()=>this.props.onToggleComplete(index)}
                            >
                                {v.text}
                            </li>
                        })
                    }

                </ul>
                <ul>
                    {
                        this.props.testAsync.map((v,index)=>
                            <li key={index}>{v.className}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList