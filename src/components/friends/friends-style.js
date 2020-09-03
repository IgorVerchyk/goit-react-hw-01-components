import styled from "styled-components";

export default {
  FrendList: styled.ul`
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    margin-bottom: 80px;
    border-radius: 4px;
    flex-direction: column;
    padding: 0;
    width: 252px;
    background-color: #ffffff;
    list-style: none;
    padding-bottom: 10px;
  `,
  Item: styled.li`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 232px;
    height: 60px;
    filter: drop-shadow(1px 2px 2px rgba(191, 205, 222, 0.75));
    border: 1px solid;
    border-color: rgba(191, 205, 222, 0.75);
  `,
  Status: styled.span`
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
  `,
  Avatar: styled.img`
    overflow: hidden;
    border-radius: 5px;
    width: 48px;
  `,
  Name: styled.p`
    margin-left: 20px;
    font-size: 16px;
    letter-spacing: 0px;
    color: #475965;
    font-weight: bold;
    font-family: "Lato";
  `,
};
