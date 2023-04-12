import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UserComponents from '../pure/user';
import { User } from '../../models/user.class';
import { ONLINE } from '../../models/line.enum';
import UserForms from '../pure/forms/userForms';


const UserList = () => {

    const defaultUser = new User ('Uriel Olaf', 'Baeza Baeza', 'baezauriel01@gmail.com', ONLINE.CONNECTED, false);
    const [users, setUser] = useState([defaultUser]);

    function completeUser(user){
        console.log('Complete this Task', user);
        const index = users.indexOf(user);
        const tempUser = [...users];
        tempUser[index].Sconnected = !tempUser[index].Sconnected;
        //we update the state of the component with the new list of tasks and it will update 
        //the iteration of the tasks in order to show the tasks update
        setUser(tempUser);
    } 
    function deleteUser(user){
        console.log('Delete this Task', user);
        const index = users.indexOf(user);
        const tempUser = [...users];
        tempUser.splice(index, 1);
        setUser(tempUser);
    }

    function addUser (user){
        console.log('Delete this Task', user);
        const tempUser = [...users];
        tempUser.push(user);
        setUser(tempUser);
    } 

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Users: 
                        </h5>
                    </div>
                    
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Email</th>
                                    <th>connected</th>
                                    <th>Show Connected</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return(
                                        <UserComponents 
                                            key={index} 
                                            User={user} 
                                            complete={completeUser}
                                            remove = {deleteUser}> 
                                        </UserComponents>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <UserForms
                    add={addUser}
                    ></UserForms>
                </div>
            </div>
        </div>
    );
};



export default UserList;
