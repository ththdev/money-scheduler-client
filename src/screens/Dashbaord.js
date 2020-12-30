import PageTitle from "components/base/PageTitle";
import BudgetItem from "components/budget/BudgetItem";
import React from "react";
import samples from "lib/samples.js";

const Dashboard = () => {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      {samples.map((sample, index) => (
        <BudgetItem data={sample} key={index} />
      ))}
    </>
  );
};

export default Dashboard;
