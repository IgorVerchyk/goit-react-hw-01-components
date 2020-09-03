import styled from "styled-components";

export default {
  Statistics: styled.section`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 268px;
    height: 130px;
    filter: drop-shadow(0px 2px 1px rgba(2, 2, 2, 0.02));
    background-color: #ffffff;
    overflow: hidden;
  `,
  Title: styled.h2`
    font-size: 16px;
    letter-spacing: 0px;
    color: #475965;
    font-weight: bold;
    font-family: "Lato";
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    text-transform: uppercase;
  `,
  StatList: styled.ul`
    display: flex;
    width: 268px;
    height: 60px;
    list-style: none;
    padding: 0;
    margin-bottom: 0;
  `,
  Item: styled.li`
    display: block;
    flex-direction: column;
    width: 67px;
  `,
  Label: styled.span`
    display: block;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0px;
    line-height: 20px;
    color: #ffffff;
    font-weight: 300;
    font-family: "Lato";
  `,
  Persentage: styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 20px;
    color: #ffffff;
    font-family: "Lato";
  `,
};
