import React from 'react';
import PropTypes from 'prop-types';
import UserComponents from '../pure/user';
import { User } from '../../models/user.class';
import { ONLINE } from '../../models/line.enum';


const UserList = () => {

    const defaultUser = new User ('Uriel Olaf', 'Baeza Baeza', 'baezauriel01@gmail.com', ONLINE.CONNECTED);

    return (
        <div>
            <div>
                User: 
            </div>
            <UserComponents User={defaultUser}></UserComponents>
        </div>
    );
};



export default UserList;
