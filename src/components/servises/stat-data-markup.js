import React from 'react';
import StatStyles from '../statistics/statistical-styles';
import RandomColor from './random-color';
import PropTypes from 'prop-types';

export default function StatCollectionMarkup({ prop }) {
    return prop.map(item => (
        <StatStyles.Item
            key={item.id}
            style={{ backgroundColor: RandomColor() }}
        >
            <StatStyles.Label>{item.label}</StatStyles.Label>
            <StatStyles.Persentage>{item.percentage}</StatStyles.Persentage>
        </StatStyles.Item>
    ));
}

StatCollectionMarkup.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentaje: PropTypes.number,
};
