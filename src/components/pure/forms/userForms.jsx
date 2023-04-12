import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ONLINE } from '../../../models/line.enum';
import { User } from '../../../models/user.class';

const UserForms = ({add}) => {


    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const mailRef = useRef('');
    const onlineRef = useRef(ONLINE.NOCONNECTED);

    function addTask(e){
        e.preventDefault();
        const newTask = new User(
            nameRef.current.value, 
            lastNameRef.current.value,
            mailRef.current.value, 
            onlineRef.current.value,
            false
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-item-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' placeholder='Name' type='text' className='form-control form-control-lg' required autoFocus></input>
                <input ref={lastNameRef} id='inputlastName' type='text' className='form-control form-control-lg' required placeholder='Last Name'></input>
                <input ref={mailRef} id='inputMail' type='text' className='form-control form-control-lg' required placeholder='Mail'></input>
                <label htmlFor='selectOnline' className='sr-only'>Priority</label>
                <select ref={onlineRef} defaultValue={ONLINE.NOCONNECTED} id='selectOnline'>
                    <option value={ONLINE.CONNECTED}>
                        Connected
                    </option>
                    <option value={ONLINE.NOCONNECTED}>
                        Desconnected
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}


UserForms.propTypes = {
    add: PropTypes.func.isRequired
}
export default UserForms;
