import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getPizzas } from "../actions/pizzaActions";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { pizza, loading, error } = pizzaState;
  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  return (
    <div className="row justify-content-center">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        pizza.map((pizza) => {
          return (
            <div className="col-md-3 m-3" key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
