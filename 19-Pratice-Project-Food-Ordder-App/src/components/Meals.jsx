import MealItem from "./MealItem";
import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const { data, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {data != undefined && (
        <>
          {data.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </>
      )}
    </ul>
  );
}
