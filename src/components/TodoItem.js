import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = ()=>{
       return{
            background :'#f4f4f4',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none',
            padding: '10px',            
            border: '1px solid black',
            borderRadius : '4px',
            marginTop: '10px',
            marginBottom:'10px'
        }
    }
    render() {
        const { title , id } = this.props.todo;
        return (
            <div style= { this.getStyle() } >
                <p>
                    <input type="checkbox" className="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    {title}
                    <button style={btnDelete} onClick={this.props.deleteTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.proptTypes = {
    todo  : PropTypes.object.isRequired
}

const btnDelete ={
    background :'red',
    color :'white',
    padding: '5px',
    border: 'none',
    borderRadius : '50%',
    float :' right',
    cursor:'pointer',
    outline: 'none'
}
export default TodoItem
