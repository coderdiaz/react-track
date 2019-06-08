import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    task: '',
  }

  render() {
    return (<div className="todo-list">
      <div className="form-group">
        <label className="form-label" for="input-task">New task</label>
        <input className="form-input" type="text" id="input-task" placeholder="Enter a task" />
      </div>
      <div className="form-group">
        <button className="btn">Save task</button>
      </div>
      <div className="divider"></div>
      <p className="text-gray">No tasks</p>
    </div>);
  }
}

export default TodoList;