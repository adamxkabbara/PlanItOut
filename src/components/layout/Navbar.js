import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function NavBar() {
    return (
        <nav>
            <div className='nav-wrapper grey darken-3'>
                <div className="container">
                    <Link to='/' className='brand-logo'>PlanItOut</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;