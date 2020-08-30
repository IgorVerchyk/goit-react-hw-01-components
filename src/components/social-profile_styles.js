import styled from "styled-components";

export default {
  Profile: styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    margin-bottom: 80px;
    border-radius: 4px;
    flex-direction: column;
    overflow: hidden;
    width: 252px;
    height: 320px;
    filter: drop-shadow(0px 1px 1.5px rgba(191, 205, 222, 0.75));
    background-color: #ffffff;
  `,

  Description: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Avatar: styled.img`
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    width: 99px;
    height: 99px;
    border-radius: 49px;
    background-color: #000000;
  `,
  Name: styled.p`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 32px;
    color: #122236;
    font-weight: 700;
    font-family: "Lato";
  `,
  Tag: styled.p`
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 32px;
    color: #768696;
    font-weight: 400;
    font-family: "Lato";
  `,
  Location: styled.p`
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    font-weight: 400;
    font-family: "Lato";
  `,
  Stats: styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
  `,
  ListItem: styled.li`
    display: flex;
    flex-direction: column;
    width: 82px;
    height: 70px;
    background-color: #f3f6f9;
    border: 1px solid #e4e9f0;
  `,
  Lable: styled.span`
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    line-height: 32px;
    color: #768696;
    font-weight: 400;
    font-family: "Lato";
  `,
  Quantity: styled.span`
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    line-height: 32px;
    color: #1f3349;
    font-weight: 900;
    font-family: "Lato";
  `,
};
