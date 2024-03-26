import React from 'react'

const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {
  const TaskCardDeleteButton = (id) => {
    // task delete
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => TaskCardDeleteButton(taskCard.id)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
