import React from "react";
import CardStyles from "../social-profile/social-profile_styles";
import PropTypes from "prop-types";

export default function SocProfile({ prop, children }) {
  return (
    <CardStyles.Profile>
      <CardStyles.Description>
        <CardStyles.Avatar src={prop.avatar} alt="user avatar" />
        <CardStyles.Name>{prop.name}</CardStyles.Name>
        <CardStyles.Tag>@{prop.tag}</CardStyles.Tag>
        <CardStyles.Location>{prop.location}</CardStyles.Location>
      </CardStyles.Description>
      {children}
    </CardStyles.Profile>
  );
}

SocProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node.isRequired,
};
