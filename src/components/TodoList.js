import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    task: '',
    tasks: [],
  }

  handleChange = field => evt => {
    this.setState({
      [field]: evt.target.value,
    });
  }

  saveTask = evt => {
    evt.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: this.state.task,
        }
      ],
      task: '',
    });
  }

  render() {
    return (<div className="todo-list">
      <div className="form-group">
        <label className="form-label">New task</label>
        <input className="form-input" type="text" onChange={this.handleChange('task')} value={this.state.task} placeholder="Enter a task" />
      </div>
      <div className="form-group">
        <button className="btn" onClick={this.saveTask}>Save task</button>
      </div>
      <div className="divider"></div>
      {this.state.tasks && this.state.tasks.length > 0 ? this.state.tasks.map((element) => (<div>
        {element.task}
      </div>)): <p className="text-gray">No tasks</p>}
    </div>);
  }
}

export default TodoList;