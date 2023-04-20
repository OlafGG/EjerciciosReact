import React from 'react';
import { levels } from '../../../models/levels.enum';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TaskregisterFormik = () => {


    const task = {
        name: '',
        description: '',
        completed: false,
        level: levels.NORMAL
    }


    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, 'Name too short')
            .max(12, 'Name too long')
            .required('Name is required'),
        description: Yup.string()
            .min(12, 'Description too short')
            .max(30, 'Description too long')
            .required('Description is required'),
        completed: Yup.boolean()
            .required('Completed is required'),
        level: Yup.string()
            .required('Levels is required')
    })

    return (
        <div>
            <h4>Register Tasks</h4>
            <Formik
            initialValues={task}
            validationSchema={taskSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                localStorage.setItem('credentials', values)
            }}

            >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    <label htmlFor="name">Task Name</label>
                    <Field id="name" name="name" placeholder="Task Name" />

                    {
                        errors.name && touched.name && 
                        (
                            <div>
                                <ErrorMessage name='name'></ErrorMessage>
                            </div>
                        )
                    }

                    <label htmlFor="description">Task Description</label>
                    <Field id="description" name="description" placeholder="Task Description" />
                    
                    {
                        errors.description && touched.description && 
                        (
                            <div>
                                <ErrorMessage name='description'></ErrorMessage>
                            </div>
                        )
                    }

                    {task.completed=false}

                    <div>
                    <label htmlFor="level">Levels</label>
                    <label >
                        <Field id="level" type="radio" name="level"  value="NORMAL" />
                        NORMAL
                    </label>
                    <label>
                        <Field id="level" type="radio" name="level"  value="URGENT" />
                        URGENT
                    </label>
                    <label>
                        <Field id="level" type="radio" name="level" value="BLOCKING" />
                        BLOCKING
                    </label>
                    </div>

                    <button type="submit">Submit</button>
                    {isSubmitting ? (<p>Adding your task...</p>) : null}

                </Form>


            )}

            </Formik>
        </div>
    );
}

export default TaskregisterFormik;
