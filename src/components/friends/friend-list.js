import React from 'react';
import Styles from './friends-style';
import PropTypes from 'prop-types';

export default function FriendListRender({ prop }) {
    return prop.map(item => (
        <Styles.Item key={item.id}>
            <Styles.Status
                style={{ backgroundColor: item.isOnline ? 'green' : 'red' }}
            ></Styles.Status>
            <Styles.Avatar src={item.avatar} alt={item.name} />
            <Styles.Name>{item.name}</Styles.Name>
        </Styles.Item>
    ));
}

FriendListRender.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
};
