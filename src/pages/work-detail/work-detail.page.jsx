import React from 'react';

import Loading from '../../components/loading/loading.component';
import AnimatedCommonLoading from '../../components/animatedCommonLoading/animatedCommonLoading.component';

const WorkDetail = () => {
    return(
        <>
            <Loading />
            <AnimatedCommonLoading title='Work Detail' />
        </>
    )
};

export default WorkDetail;