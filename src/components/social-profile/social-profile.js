import React from 'react';
import CardStyles from '../social-profile/social-profile_styles';
import PropTypes from 'prop-types';

export default function SocProfile({ user, children }) {
    return (
        <CardStyles.Profile>
            <CardStyles.Description>
                <CardStyles.Avatar src={user.avatar} alt="user avatar" />
                <CardStyles.Name>{user.name}</CardStyles.Name>
                <CardStyles.Tag>@{user.tag}</CardStyles.Tag>
                <CardStyles.Location>{user.location}</CardStyles.Location>
            </CardStyles.Description>
            {children}
        </CardStyles.Profile>
    );
}

SocProfile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    children: PropTypes.node.isRequired,
};
