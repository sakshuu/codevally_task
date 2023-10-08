import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTask, showTask } from '../redux/action/taskAction'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const {tasks, toggle} = useSelector(state => state.allTask)
  const [editTask, seteditTask] = useState([])
  const [deleteTask, setdeleteTask] = useState(null)

  useEffect(() => {
    dispatch(showTask())
  }, [toggle])
  
  
  return <>
{/* <pre>
  {JSON.stringify(tasks,null,2)}
</pre> */}

    <div className="container main">
      <div className="row">
          {
            tasks?.map((item,i) => <>
        <div className="col-sm-6 offset-sm-3">
        <div class="card mt-4">
              <div
                class="card-header d-flex justify-content-between"
                data-bs-toggle="collapse"
                // data-bs-target="#task1"
                data-bs-target={`#task${item._id}`}>
                {item?.task}
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal"
       onClick={e => seteditTask(item)}
                  >
                    edit
                  </button> {' '}
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    data-bs-target="#deleteModal"
                    data-bs-toggle="modal"
                    onClick={e => setdeleteTask(item._id)}
                  >
                    delete
                  </button>
                  
                </div>
              </div>
              <div class="collapse"  id={`task${item._id}`}>
                <div class="card-body">{item?.desc}</div>
              </div>
            </div>
        </div>
            </>)
          }

      </div>
    </div>
    

                  {/* <!-- edit Modal --> */}
      <div class="modal fade main" id="editModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModal">Edit Task</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label for="mtask" class="form-label">First task</label>
                <input
                  type="text"
                  class="form-control"
                  id="mtask"
                  placeholder="Enter Your task"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add task.</div>
              </div>
              <div class="mt-2">
                <label for="mdesc" class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="mdesc"
                  placeholder="Enter task description"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add description</div>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-3">
                Update Task
              </button>
              <button
                type="button"
                class="btn mt-2 w-100 btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* <!-- Delete Modal --> */}
      <div class="modal fade main" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger">
                Are you sure you want delete this todo ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-danger">
              <p class="text-center text-muted mb-5">
                You can delete this todo at any time. If you change your mind, you
                might not be able to recover it
              </p>
              <div class="btn-group w-100">
                <button type="button" data-bs-dismiss="modal" class="btn btn-outline-danger" onClick={e => dispatch(DeleteTask(deleteTask))}>Yes</button>
                <button type="button" data-bs-dismiss="modal" class="btn btn-success">NO</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Home