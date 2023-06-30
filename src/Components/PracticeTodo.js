import React, { useState } from 'react';

export default function PracticeTodo() {
  const [username, setUsername] = useState('Pratiksha');
  // Array of objects default todo list
  const [todoitems, settodoitems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Buy Movie Ticket", done: true },
    { action: "Meeting@10Am", done: false },
    { action: "Call Mom", done: false },
  ]);
  // THIRD PART
  const [newItem, setnewItem] = useState()
  const [showComplete, setshowComplete] = useState(false);  //FOURTH PART USE STATE

  function createNewTodo() {  //third part function
    if (newItem) {              //for new todo have to update all the settodoitems as well
      settodoitems([...todoitems, { action: newItem, done: false }])
      setnewItem("")
    }

  }
  // SECOND PART FUNCTION
  function toggleTodo(todo) {
    // update the state using this settodoitems
    settodoitems(todoitems.map((item) =>    //item jo hai wo uper wale actions hoge sare (old item ko new todo se compare kr rahe)
      item.action === todo.action ? { ...item, done: !item.done } : item)) //item.action and todo action match krte hai to done value ko not krke remove kre otherwise share the item
  }
  // SECOND PART FUNCTION(map using here)
  let todoTableRow = (doneValue) => {
    {/*FOURTH PART START*/ } {/*doneValue passed */ }
    {/*FOURTH PART item.done ki value equal hogi doneValue ke*/ }
    return todoitems
      .filter((item) => item.done === doneValue)
      .map((item, i) => (                       //.todoitem it's called chaining FOURTH PART
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.action}</td>
          <td>
            <input type="checkbox" checked={item.done}
              onChange={() => toggleTodo(item)} />
            {/* //checkbox click krne ke liye ye function bnaya gya(selected item to be passed) */}
            {/* function ke andar koe value pass krte hai to usko aise likha jana hai onChange={()=>toggleTodo(item)} */}
            {/* item passed to toggleTodo(todo) */}
          </td>
        </tr>
      ))
  }

  return (
    <div>
      {/* FIRST PART  (it's for only heading)*/}
      {/*Heading part of the project  */}
      <div className="row">
        <div className="col-md-12">
          {/* Print username */}
          <h3 class="bg-primary text-white text-center">{username}'s Todo List
            {/* filter todolist for pending and complete todo */}
            {/* t=points all the todo and !t.done pending todo show in heading and kitne todo pending hai wo length se show hoge */}
            {" "}  ({todoitems.filter((t) => !t.done).length} Todo Pending) </h3>
        </div>
      </div>
      {/* FIRST PART COMPLETED */}
      {/* ======================================================================= */}
      {/* THIRD PART  create input box ad button for add new elements*/}
      <div className='row'>
        <div className='col-md-5'>
          <input type="text" className='form-control'
            onChange={(e) => setnewItem(e.target.value)} //it will update new todo
            value={newItem}
          />
        </div>
        <div className='col-md-5'>
          <button className='btn btn-primary' onClick={createNewTodo}>Add</button>
        </div>
      </div>
      {/* SECOND PART */}
      <div className="row">
        <div className="col-md-12">
          <table className="table">

            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>
              {/*function call*/}    {/*function value by default false FOURTH PART*/}
              {todoTableRow(false)}    {/*show only todo jiski done value false hai FOURTH PART*/}
            </tbody>
          </table>
          {todoitems.filter((t) => !t.done).length === 0 && (
              <h2 className="text-danger text-center ">-----No Todo Available-----</h2>
            )}
        </div>
      </div>

      {/* FOURTH PART SHOW BUTTON */}
       {/* Checkbox to show and hide the table */}

       <div className="row">
        <div className="col-md-6">
          <input
            type="checkbox"
            checked={showComplete}
            onChange={(e) => setshowComplete(e.target.checked)} //onchange use here for by default value false hai button pr click rte hi value true show ho jaye
          />
          <span className="text-primary mx-2">Show completed</span> 
        </div>
      </div>

      {/* FOURTH PART TABLE HERE SHOW COMPLETED TODO */}
      {/* Table with Done value true */}
      {showComplete ? (
        // conditional Rendering IF IT IS TRUE
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Done</th>
                </tr>
              </thead>
              <tbody>{todoTableRow(true)}</tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  )
}
