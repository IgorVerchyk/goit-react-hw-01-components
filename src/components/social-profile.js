import React from "react";
import CardStyles from "./social-profile_styles";

export default function SocProfile({ avatar, name, tag, location, stats }) {
  return (
    <CardStyles.Profile>
      <CardStyles.Description>
        <CardStyles.Avatar src={avatar} alt="user avatar" />
        <CardStyles.Name>{name}</CardStyles.Name>
        <CardStyles.Tag>@{tag}</CardStyles.Tag>
        <CardStyles.Location>{location}</CardStyles.Location>
      </CardStyles.Description>
      <CardStyles.Stats>
        <CardStyles.ListItem>
          <CardStyles.Lable>Follovers</CardStyles.Lable>
          <CardStyles.Quantity>{stats.followers}</CardStyles.Quantity>
        </CardStyles.ListItem>
        <CardStyles.ListItem>
          {" "}
          <CardStyles.Lable>Views</CardStyles.Lable>
          <CardStyles.Quantity>{stats.views}</CardStyles.Quantity>
        </CardStyles.ListItem>
        <CardStyles.ListItem>
          {" "}
          <CardStyles.Lable>Likes</CardStyles.Lable>
          <CardStyles.Quantity>{stats.likes}</CardStyles.Quantity>
        </CardStyles.ListItem>
      </CardStyles.Stats>
    </CardStyles.Profile>
  );
}
