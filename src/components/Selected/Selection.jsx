import React from 'react';

const Selection = ({ selection, idx }) => {
    const { title, id } = selection;

    return (
        <div className=' py-2'>
            <p className='py-1 px-2 text-sm rounded-sm bg-slate-300'>{idx}. {title}</p>
        </div>
    );
};

export default Selection;