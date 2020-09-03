import React from "react";
import styled from "styled-components";
import user from "./social-profile/user.json";
import statistical from "./statistics/statistical-data.json";
import friends from "./friends/friends.json";
import transaction from "./transaction/transaction.json";
import SocProfile from "./social-profile/social-profile";
import StatsRender from "./servises/stats-markup";
import Stats from "./statistics/statistical";
import StatsCollectionMarkup from "./servises/stat-data-markup";
import Friends from "./friends/friends";
import FriendsList from "./friends/friend-list";
import TransactionList from "./transaction/transaction";
import TransactionItem from "./servises/transaction-list";

const statTitle = `upload stats`;

const MainContainer = styled.div`
  display: flex;
  background-color: #e7ecf2;
  flex-direction: column;
`;

export default function App() {
  return (
    <MainContainer>
      <SocProfile prop={user}>
        <StatsRender prop={user.stats} />
      </SocProfile>
      <Stats title={statTitle}>
        <StatsCollectionMarkup prop={statistical} />
      </Stats>
      <Friends>
        <FriendsList prop={friends} />
      </Friends>
      <TransactionList>
        <TransactionItem prop={transaction}></TransactionItem>
      </TransactionList>
    </MainContainer>
  );
}
