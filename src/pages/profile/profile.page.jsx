import React from 'react';
import Loading from '../../components/loading/loading.component';
import AnimatedCommonLoading from '../../components/animatedCommonLoading/animatedCommonLoading.component';

const Profile = () => {
    return (
        <>
            <Loading />
            <AnimatedCommonLoading title='PROFILE' />
        </>
    )
}

export default Profile;