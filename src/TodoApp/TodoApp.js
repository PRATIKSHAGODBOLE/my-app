import React, { useState } from 'react'

export default function TodoApp() {
    const [username, setusername] = useState("Pratiksha")
    // Array of Objects
    const [todoitems, settodoitems] = useState([
        // action means what action to do need to performe
        //this is intial value of todo
        { action: 'Buy Flowers', done: false }, //false meand this to do not completed
        { action: 'Buy Movie Ticket', done: true },//true means completed
        { action: 'full stack developer', done: false },
        { action: 'Meeting at 10am', done: false },
    ])
    //newitem input wala hai
    const[newItem, setnewItem]=useState()
    // showcomplete
    const [showComplete, setshowComplete] = useState(false);

    //createNewTodo funtion onclik
    function createNewTodo (){
        if(newItem){
            settodoitems([...todoitems, {action:newItem, done:false}])//we create new todo
            console.log(todoitems.length)
            setnewItem("")  //input.value = " "
        }
    }
    // toggleTodo 
    function toggleTodo(todo) {
        settodoitems(todoitems.map((item) => item.action === todo.action ? { ...item, done: item.done } : item)) //this item is action wale
    }
    // create function of tbody
    let todoTableRow = (doneValue) => {
        return  todoitems
        .filter((item)=>item.done === doneValue)
        .map((item, i) => (     //i for index value
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.action}</td>
                <td>
                    <input type="checkbox" checked={item.done}
                        onChange={() => toggleTodo(item)}  /* function ke andar koe value pass krte to uske pahle ()=> */
                    />                               {/*(item)  passing to (todo)*/}
                </td>
            </tr>
        ))
    }

    return (
        <div>
            {/* Heading part of todo  */}
            {/* create row from bootstrap */}
            <div className='row'> {/* Inside row create columne */}
                <div className='col-md-12'> {/* medium devices = md */}
                    {/*Header Part */}
                    {/* t = todo and t.done = how many todo NOT completed (Ero fun) */} {/*Filter method filter the element */}
                    {/*.length means not completed todo list length*/}  {/* {" "} = space and todo pending*/}
                    <h3 className="bg-primary text-white text-center">
                        {username}'s Todo List ({todoitems.filter((t) => !t.done).length}{" "}
                        todos Pending)
                    </h3>
                </div>
            </div>

            {/* Input box */}
            <div className="row">
                <div className="col-md-10">
                    <input type="text" className='form-control' 
                    onChange={(e)=>setnewItem(e.target.value)}
                    value = {newItem}
                    />
                    </div>
                    <div className="col-md-2">
                        <button className='btn btn-primary' onClick={createNewTodo}>Add</button>
                    </div>
            </div>
            {/*  */}

            {/* Second Part let's create TODO TABLE */}
            <div className='row'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Description</th>
                                <th scope="col">Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* call the function */}
                            {todoTableRow(false)}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* checkbox to show and hide the table */}
            <div className="row">
        <div className="col-md-6">
          <input
            type="checkbox"
            checked={showComplete}
            onChange={(e) => setshowComplete(e.target.checked)}
          />
          <span className="text-primary mx-2">Show completed</span>
        </div>
      </div>

            {/* table with done value true */}
            {showComplete ? (
            <div className='row'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Description</th>
                                <th scope="col">Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* call the function */}
                            {todoTableRow(true)}
                        </tbody>
                    </table>
                </div>
            </div>
            ) : null}

        </div>
    );
}
