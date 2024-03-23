import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(["item0", "item1", "item2"]);
  const onDragEnd = (result) => {
    // 削除
    const remove = items.splice(result.source.index, 1);
    // 挿入
    items.splice(result.destination.index, 0, remove[0]);
    // ステートを更新
    setItems([...items]);
  };
  return (
    // <div className="App">
    <div className="dragDropArea">
<DragDropContext onDragEnd={onDragEnd}>
  <Droppable droppableId="droppable">
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        <Draggable draggableId="item0" index={0}>
          {(provided) => (
            <div
              className="item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {items[0]}
            </div>
          )}
        </Draggable>
        <Draggable draggableId="item1" index={1}>
          {(provided) => (
            <div
              className="item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {items[1]}
            </div>
          )}
        </Draggable>
        <Draggable draggableId="item2" index={2}>
          {(provided) => (
            <div
              className="item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {items[2]}
            </div>
          )}
        </Draggable>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
