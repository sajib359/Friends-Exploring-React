import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 className='text-5xl text-bold mt-5'>Welcome To My Site For Beloved Friends!! </h1>
            <span className='text-2xl text-red-700 text-bold mt-4'>This Site For Exploring Friends</span>
            <div>
            
                <CustomLink to={'./'}>Home</CustomLink>
                <CustomLink to={'./about'}>About</CustomLink>
                <CustomLink to={'./friends'}>Friends</CustomLink>

            {/* <Link to={'./'}>Home</Link>
            <Link to={'./about'}>About</Link>
            <Link to={'./friends'}>Friends</Link> */}
            </div>
            

        </div>
    );
};

export default Header;