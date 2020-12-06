import React, { Component } from 'react';
import classes from './TodoApp.module.css';

class TodoApp extends Component {
    state = {
        userInput : '',
        list : []
    }

    textHandler = (e) => {
        this.setState({userInput : e.target.value})
    }

    const submitHandler = (e) => {
        let updatedList = this.state.list;
        updatedList.push(e);
        console.log(updatedList);
        this.setState({userInput : '', list : updatedList});
    }
    
    const deleteHandler = (e) => {
        let updatedList = this.state.list;
        updatedList.shift(e);
        this.setState({list : updatedList}); 
    }
    render(){
        
        return(
            <div className={classes.TodoApp}>
                <h2>To-Do List</h2>
                <div className={classes.Input}>
                    <input type="text" onChange={this.textHandler} value={this.state.userInput} placeholder="What to do?!" />
                </div>
                <button className={classes.Button} onClick={() => this.submitHandler(this.state.userInput)}>Do this!</button>
                <button className={classes.Smallbutton} onClick={() => this.deleteHandler(this.state.userInput)}>X</button>
                <ul>
                    {this.state.list.map( item =>  {
                       return <li className={classes.Li} onClick={() => this.deleteHandler(item)} key={item}>{item} </li>;
                    })}
                </ul>

            </div>
        );
    }
}

export default TodoApp;