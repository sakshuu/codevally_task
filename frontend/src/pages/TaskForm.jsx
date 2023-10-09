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
       task:"Task 1",
       desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi voluptas quos dicta aliquam sunt quasi fuga, cupiditate error reprehenderit vel? Aspernatur dolorum consequuntur itaque nam blanditiis quod laboriosam dolore? "
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
                  <p class="invalid-feedback">
                  {formik.errors.task}
                    </p>
                </div>
                <div class="mt-2">
                  <p for="desc" class="form-label">Description</p>
                  <textarea
                    type="text"
                    rows={3}
                    id="desc"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                       formik.errors.desc && formik.touched.desc
                       ? "form-control is-invalid"
                       : "form-control"}

                    placeholder="Enter task description"
                  ></textarea>

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