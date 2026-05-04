import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="font-bold text-5xl">This page is not available</h1>
            <Link href={'/'}><button className="btn">Back to home</button></Link>
        </div>
    );
};

export default NotFoundPage;