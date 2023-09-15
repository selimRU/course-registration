import React from 'react';

const Selection = ({ selection, idx }) => {
    const { title } = selection;
    console.log(idx);

    return (
        <div>
            <p className=' py-1'>{idx} {title}</p>
        </div>
    );
};

export default Selection;