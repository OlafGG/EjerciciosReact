import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { User } from '../../models/user.class';


const UserComponents = ({ User, complete, remove }) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Tarea: ${User.name} va a deesaparecer`);
        };
    }, [User]);

    function taskIconCompleted(){
        if(User.Sconnected){
            return(<i onClick={() => complete(User)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return(<i onClick={() => complete(User)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }

    }


    return (

        <tr className='fw-normal'>
            <th>
               <span className='ms-2'>{User.name}</span>
            </th>
            <td>
                <span className='ms-2'>{User.lastName}</span>
            </td>
            <td>
                <span className='ms-2'>{User.mail}</span>
            </td>
            <td>
                <span className='ms-2'>{User.connected}</span>
            </td>
            <td className='align-middle'>

                { taskIconCompleted() }
            </td>
            <td>
            <i className='bi-trash task-action  ' style={{color: 'tomato'}} onClick={() => remove(User)}></i>
            </td>
        </tr>
    );

}

UserComponents.propTypes = {
    user: PropTypes.instanceOf(User)
};


export default UserComponents;
