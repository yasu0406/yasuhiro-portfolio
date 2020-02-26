import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading/loading.component';
import AnimatedWorks from '../../components/animatedWork/animatedWorks.component';

const Works = () => {
    return (
        <>
            <Loading />
            <AnimatedWorks />
        </>
    )
};

export default Works;