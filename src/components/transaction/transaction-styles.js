import styled from "styled-components";

export default {
  Table: styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 872px;
    border-radius: 5px;
    filter: drop-shadow(0px 2px 1.5px rgba(0, 0, 0, 0.25));
    background-color: #ffffff;
  `,
  Thead: styled.thead`
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 30px;
    color: #ffffff;
    font-weight: bold;
    font-family: "Lato";
    background-color: #00bcd4;
    text-transform: uppercase;
    height: 45px;
    border: 2px solid blue;
  `,
  Tbody: styled.tbody`
    text-align: center;
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 30px;
    color: #5c6975;
    font-weight: 300;
    font-family: "Lato";
  `,
  Tr: styled.tr``,
  Th: styled.th`
    padding: 0;
  `,
  Td: styled.td`
    padding: 0;
    text-transform: capitalize;
  `,
};
