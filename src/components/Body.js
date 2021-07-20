import React from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';
import TodoList from './TodoList'

export default class Body extends React.Component {

    constructor() {
        super();
        this.add = this.add.bind(this);
        this.syncParentState = this.syncParentState.bind(this);
        this.state = {
            val: '',
            source: []
        }

    }


    add() {
        let todos = this.state.source;
        console.log(todos)
        let todo = {
            done: false,
            value: this.state.val
        };
        todos.push(todo);
        this.syncParentState({val: '', source: todos});
    }


    syncParentState(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <div className="content-section implementation">
                <br /><br />
                <InputText value={this.state.val}  onChange={(e) => {this.setState({val: e.target.value})}}/> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button label="Add" icon="fa-check" onClick={this.add} />
                <br />
            <TodoList source={this.state.source} sync={this.syncParentState} />
            </div>
        );
    }

}