import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="info">Info Page</h1>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate
        deserunt? Praesentium excepturi repellat laborum velit quidem cumque
        adipisci quod maiores ea unde rem nobis ipsum eos, odit et numquam.
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Return to TO-DO-LIST
      </button>
    </>
  );
};
