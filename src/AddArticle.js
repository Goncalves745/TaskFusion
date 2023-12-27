import * as React from "react";


function AddTask({
  name,
  title,
  task,
  onChangeTitle,
  onChangeTask,
  onClickAdd,
}) 
{
  return (
    <section>
      <input
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />
      <textarea 
            id="areaTask" 
            rows="20" 
            cols="100" 
            style={{justifyContent: "left", textAlign: "left",marginTop: '8px'}}
            placeholder='task'
            value={task}
            onChange={onChangeTask}
            >
            </textarea>
      <h1>{name}</h1>
      <button onClick={onClickAdd}>Done</button>
    </section>
  );
}


export default AddTask;
