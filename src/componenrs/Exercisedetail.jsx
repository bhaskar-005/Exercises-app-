import React, { useState, useEffect } from "react";
import Detail from "../ExerciseRouteComponents/Detail";
import Youtube from "../ExerciseRouteComponents/Youtube";
  import { useLocation } from "react-router-dom";

const Exercisedetail = () => {
  return (
    <>
      <Detail/>
      <Youtube />
    </>
  );
};

export default Exercisedetail;
