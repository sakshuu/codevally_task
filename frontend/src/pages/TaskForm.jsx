import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/action/taskAction'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup"

const TaskForm = () => {
  // const {} = useSelector(state => state.allTask)
  const actionDispatch = useDispatch()
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
       task:"",
       desc:""
    },
    validationSchema: yup.object({
      task:yup.string().required("Please provide Task"),
      desc:yup.string().required("Please Enter desc"),
    }),
    onSubmit: (values,{ resetForm }) => {
      actionDispatch(addTask(values))
        navigate("/")
      resetForm();
    }
  })

  
  
 
  return <> 
      <div class="container main">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Task</div>
              <form onSubmit={formik.handleSubmit}>
              <div class="card-body">
                <div>
                  <p for="task" class="form-label">First task</p>
                  <input
                    type="text"
                    class="form-control"
                    id="task"
                    value={formik.values.task}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                            formik.errors.task &&
                           formik.touched.task &&
                           "is-invalid"}
                    placeholder="Enter Your task"
                  />
                  <p class="invalid-feedback">
                  {formik.errors.task}
                    </p>
                </div>
                <div class="mt-2">
                  <p for="desc" class="form-label">Description</p>
                  <input
                    type="text"
                    class="form-control"
                    id="desc"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                       formik.errors.desc &&
                       formik.touched.desc &&
                       "is-invalid"}
                    placeholder="Enter task description"
                  />

                  <p class="invalid-feedback">
                  {
                    formik.errors.desc
                  }
                    </p>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-3">
                  Add Task
                </button>
              </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default TaskForm