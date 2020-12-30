import React from "react";
import styled from "styled-components";

const BudgetItem = ({ data }) => {
  const { title, amount, date, category } = data;

  return (
    <Container>
      <Info>
        <InfoTitle>{title}</InfoTitle>
        <InfoDesc>{`${category} - ${date}`}</InfoDesc>
        <InfoAmount>{amount}</InfoAmount>
      </Info>
      <DateCount>11 Days</DateCount>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #222223;
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 5px;
  }
`;

const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const InfoDesc = styled.div`
  font-size: 12px;
  color: #e5e5e5;
`;

const InfoAmount = styled.div`
  font-size: 16px;
  color: #3bcaba;
`;

const DateCount = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: right;
  color: #3bcaba;
`;

export default BudgetItem;
