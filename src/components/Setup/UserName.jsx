import React from 'react';

const UserName = ({ userName, changeHandler })=>{
    return (
        <div>
            <input
            className="setup-input"
            type='text'
            name='name'
            placeholder='Set your Username'
            value={userName}
            onChange={changeHandler}
            />
        </div>
    )
}

export default UserName