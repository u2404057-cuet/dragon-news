import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex gap-4 bg-base-300 p-4 mt-4 items-center container mx-auto'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae fuga fugiat tempora itaque nobis, maiores consequuntur odio beatae recusandae!
            </Marquee>
        </div>
    );
};

export default BreakingNews;