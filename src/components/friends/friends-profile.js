import React from 'react';
import Styles from './friends-style';
import PropTypes from 'prop-types';

export default function FriendProfile({ profile }) {
    return (
        <>
            <Styles.Status
                style={{ backgroundColor: profile.isOnline ? 'green' : 'red' }}
            ></Styles.Status>
            <Styles.Avatar src={profile.avatar} alt={profile.name} />
            <Styles.Name>{profile.name}</Styles.Name>
        </>
    );
}

FriendProfile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
};
