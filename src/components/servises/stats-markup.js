import React from 'react';
import CardStyles from '../social-profile/social-profile_styles';
import PropTypes from 'prop-types';

export default function StatsRender({ stats }) {
    return (
        <CardStyles.Stats>
            <CardStyles.ListItem>
                <CardStyles.Lable>Followers</CardStyles.Lable>
                <CardStyles.Quantity>{stats.followers}</CardStyles.Quantity>
            </CardStyles.ListItem>
            <CardStyles.ListItem>
                <CardStyles.Lable>Views</CardStyles.Lable>
                <CardStyles.Quantity>{stats.views}</CardStyles.Quantity>
            </CardStyles.ListItem>
            <CardStyles.ListItem>
                <CardStyles.Lable>Likes</CardStyles.Lable>
                <CardStyles.Quantity>{stats.likes}</CardStyles.Quantity>
            </CardStyles.ListItem>
        </CardStyles.Stats>
    );
}

StatsRender.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
