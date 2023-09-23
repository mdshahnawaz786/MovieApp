import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";

const Allmovie = () => {
  const all = useSelector((storeData) => {
    return storeData.all;
  });
  return (
    <div>
      <Card movies={all} />
    </div>
  );
};

export default Allmovie;
