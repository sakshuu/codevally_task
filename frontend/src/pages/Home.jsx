import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTask, showTask, updateTask } from '../redux/action/taskAction'
import { useFormik } from 'formik';
import * as yup from "yup"

const Home = () => {
  const dispatch = useDispatch()
  const {tasks, toggle, updatetasks} = useSelector(state => state.allTask)
  const [editTask, seteditTask] = useState({})
  const [deleteTask, setdeleteTask] = useState(null)

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      task:editTask?.task,
      desc:editTask?.desc,
    },
    validationSchema: yup.object({
      task:yup.string().required("Please provide task"),
      desc:yup.string().required("Please provide desc"),
    }),

    // const handleSubmit = (values) => {
     
    // };
    
    onSubmit: (values) => {
      
      // console.log(values, editTask._id  );
 dispatch(updateTask({values,id:editTask._id}))
    }
  })
  // console.log(edi);
// console.log(editTask._id);
  useEffect(() => {
    dispatch(showTask())
  }, [toggle])
  
  // useEffect(() => {
    
  // }, [updatetasks])
  
  
  return <>
{/* <pre>
  {JSON.stringify(updatetasks,null,2)}
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
                <form onSubmit={formik.handleSubmit}>
            <div class="modal-body">
              <div>
                <label for="mtask" class="form-label">First task</label>
                <input
                  type="text"
                  class="form-control"
                  id="task"
                  value={formik.values.task}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                         formik.errors.task && formik.touched.task 
                         ? "form-control is-invalid"
                         : "form-control"}
                  placeholder="Enter Your task"
                />
                <div class="invalid-feedback">{formik.errors.task}</div>
              </div>
              <div class="mt-2">
                <label for="mdesc" class="form-label">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="desc"
                  rows={3}
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                         formik.errors.desc && formik.touched.desc
                         ? "form-control is-invalid"
                         : "form-control"}
                  placeholder="Enter task description"
                ></textarea>
                <div class="invalid-feedback"> {formik.errors.desc}</div>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-3" data-bs-dismiss="modal">
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
            </form>
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