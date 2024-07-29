import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdApps } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { RiFolderDownloadFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todo, setTodo] = useState([])
  localStorage.setItem("todo", JSON.stringify(todo))
  function addTask() {
    if (inputValue.trim() === '') {
      alert('Please enter a task.');
      return; // Prevent adding empty task
    }
    let newAdd = {
      text: inputValue
    }
    setTodo([...todo, newAdd])
    setInputValue('')

    //for remove input value automatically!
  }

  // Function to delete a task
    function deleteTask(index) {
      const updatedTasks = [...todo];
      updatedTasks.splice(index, 1);
      setTodo(updatedTasks);
    }

    // Function to edit a task
    function editTask(index, newText) {
      const updatedTasks = [...todo];
      updatedTasks[index].text = newText;
      setTodo(updatedTasks);
    }
    // Event listener for Enter key
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div>
      <div className="container-fluid board" style={{ height: "100vh" }}>
        <div className="row p-5 justify-content-center">
          <div className="col-lg-11 rounded rounded-3 p-3" style={{ height: "640px" }} id='mainboard'>
            <div className="row h-100">
              <div className="col-lg-12 d-flex justify-content-between align-items-center mb-3">
                <h4><IoMdMenu /> <img src="https://www.gstatic.com/classroom/logo_square_rounded.svg" alt="" style={{ width: "28px" }} /> Classroom</h4 >
                <h4><FaPlus /> <IoMdApps /> <a href="" className='rounded rounded-5 ps-2 pe-2 text-decoration-none bg-secondary text-white'>R</a></h4>
              </div>
              <div className="col-lg-1 h-100 ms-5">
                <div className="row">
                  <div className="col-lg-12 d-flex flex-column justify-content-evenly align-items-center fs-1 text-white rounded rounded-3" style={{ height: "556px" }} id='grey'>
                    <MdDashboard className='rounded rounded-5 bg-secondary p-2' />
                    <FaHome className='rounded rounded-5 bg-secondary p-2' />
                    <FaRegCalendar className='rounded rounded-5 bg-secondary p-2' />
                    <FaGraduationCap className='rounded rounded-5 bg-secondary p-2' />
                    <RiFolderDownloadFill className='rounded rounded-5 bg-secondary p-2' />
                    <IoMdSettings className='rounded rounded-5 bg-secondary p-2' />
                    <CiLogout className='rounded rounded-5 bg-secondary p-2' />
                  </div>
                </div>
              </div>
              <div className="col-lg-10 rounded ms-2 pt-3" style={{ height: "556px" }} id='grey'>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-around align-items-center p-2" id='search'>
                    <input type="serach" value={inputValue} placeholder='enter your task' className='w-75 border rounded rounded-3 p-2'
                      onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} id='add'/>
                    <button className='btn btn-primary' onClick={addTask}>Add Task</button>
                  </div>
                  <div className="col-lg-11 m-auto rounded rounded-2 mt-3 p-3 text-dark" id='task'>
                    <h6>Added task_</h6>
                    {
                      todo.map((el, i) => (
                        <>
                          <h6 key={i} className='mt-3'>{el.text}</h6>
                          <div>
                            <button onClick={() => deleteTask(i)} className='btn btn-primary'>Delete</button>
                            <button onClick={() => {
                              const newText = prompt("Enter new text:", el.text);
                              if (newText !== null) {
                                editTask(i, newText);
                              }
                            }} className='btn btn-primary ms-2'>Edit</button>
                            <hr />
                          </div>
                        </>
                      ))
                    }
                  </div>

                    <div className="contanier">
                      <div className="row">
                        <div className="col-lg-6"></div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
