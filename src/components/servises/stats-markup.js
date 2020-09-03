import React from "react";
import CardStyles from "../social-profile/social-profile_styles";

export default function StatsRender({ prop }) {
  return (
    <CardStyles.Stats>
      <CardStyles.ListItem>
        <CardStyles.Lable>Followers</CardStyles.Lable>
        <CardStyles.Quantity>{prop.followers}</CardStyles.Quantity>
      </CardStyles.ListItem>
      <CardStyles.ListItem>
        <CardStyles.Lable>Views</CardStyles.Lable>
        <CardStyles.Quantity>{prop.views}</CardStyles.Quantity>
      </CardStyles.ListItem>
      <CardStyles.ListItem>
        <CardStyles.Lable>Likes</CardStyles.Lable>
        <CardStyles.Quantity>{prop.likes}</CardStyles.Quantity>
      </CardStyles.ListItem>
    </CardStyles.Stats>
  );
}
