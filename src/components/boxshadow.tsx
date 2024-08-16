import React from 'react';
import './boxshadow.css'
interface BoxProps {
    children: React.ReactNode; // Allows the Box to wrap around other components or content

}

const BoxShadow: React.FC<BoxProps> = ({ children }): JSX.Element => {
    return (
        <div className='shadow-box'>
            {children}
        </div>
    );
};

export default BoxShadow;