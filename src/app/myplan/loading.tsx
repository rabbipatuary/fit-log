import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <span className="loading loading-spinner loading-lg text-lime-400"></span>
            <h1 className="ml-4 text-xl font-semibold">Loading workouts…</h1>
        </div>
    );
};

export default Loading;