import React from 'react';
import Styles from './friends-style';
import PropTypes from 'prop-types';
import FriendProfile from './friends-profile';

export default function CreateFrendList({ friends }) {
    return (
        <Styles.FrendList>
            {friends.map(profile => (
                <Styles.Item key={profile.id}>
                    <FriendProfile profile={profile} />
                </Styles.Item>
            ))}
        </Styles.FrendList>
    );
}

CreateFrendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ).isRequired,
};
