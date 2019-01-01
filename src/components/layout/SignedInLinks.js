import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to='/create'>New Project</NavLink>
            </li>
            <li>
                <NavLink to='/'>Sign Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating light-green accent-4'>AK</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;