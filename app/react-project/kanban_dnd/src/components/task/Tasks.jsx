import React from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
    // task sort
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
};

const Tasks = ({inputText, taskList, setTaskList}) => {
    const handleDragEnd = (result) => {

        reorder(taskList, result.source.index, result.destination.index);

        setTaskList(taskList);
    }
  return (
    <div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>

                        {taskList.map((task, index) => (
                            <div key={task.id}>
                                {/* {task.text} */}
                                <Task task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
                            </div>
                        ))}

                    {provided.placeholder}
                    </div>

      )}
      </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
