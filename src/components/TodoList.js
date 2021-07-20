import React from 'react';
import {PickList} from 'primereact/components/picklist/PickList';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            source: props.source,
            target: []
        };
        this.todoTemplate = this.todoTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    
    onChange(event) {
        this.setState({
            target: event.target,
            source: event.source
        });
        this.props.sync({source: event.source})
    }

    todoTemplate(todo) {
        
        return (
            <div className="ui-helper-clearfix">
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{todo.value}</div>
            </div>
        );
    }


    render() {
        return (
            <div className="content-section implementation">
                    <br /><br /><br />
                    <PickList source={this.state.source} target={this.state.target} itemTemplate={this.todoTemplate} 
                    sourceHeader="To Be Done" targetHeader="Completed" responsive={true} 
                    sourceStyle={{height: '200px'}} targetStyle={{height: '200px', color: 'grey'}}
                    onChange={this.onChange}></PickList>
        </div>
        );
    }
}