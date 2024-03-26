import React from 'react'
import {v4 as uuid} from 'uuid'

const TaskAddInput = ({inputText,setInputText,taskList,setTaskList}) => {
    const taskId = uuid();
    const HandleSubmit = (e) => {
        e.preventDefault();
        // add card
        if(inputText === ""){
            return
        }
        setTaskList([...taskList,
            {id:taskId ,
            // 文字列のみのため変換
            draggableId:`task-${taskId}` ,
            text: inputText}]);
        setInputText("");
    };
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type='text' placeholder='add a task' className="taskAddInput" onChange={handleChange} value={inputText}>

        </input>
      </form>
    </div>
  )
}

export default TaskAddInput
