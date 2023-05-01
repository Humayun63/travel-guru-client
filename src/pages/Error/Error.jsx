import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <p>{error?.statusText || error?.message}</p>
        </div>
    );
};

export default Error;