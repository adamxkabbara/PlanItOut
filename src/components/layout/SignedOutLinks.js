import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
    return (
        <ul className='right'>
            <li>
                <NavLink to='/signin' className=''>Sign In</NavLink>
            </li>
            <li>
                <NavLink to='/signup' className=''>Sign Up</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks;