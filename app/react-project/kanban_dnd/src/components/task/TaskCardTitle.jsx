import React, {useState} from 'react'

const TaskCardTitle = () => {
    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("today");
    const handleClick = () => {
        setIsClick(true);
    }
    const handleChange = (e) => {
        setInputCardTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false);
    }
    const HandleBlur = () => {
        setIsClick(false);
    }

  return (
    <div onClick={handleClick} >
        {isClick ? (<form onSubmit={handleSubmit} >
            <input type="text" onChange={handleChange} onBlur={HandleBlur} value={inputCardTitle} maxLength="10"></input></form>) : <h3>{inputCardTitle}</h3>}
    </div>
  )
}

export default TaskCardTitle
