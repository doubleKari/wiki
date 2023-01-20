import React from "react";
import { useLoaderData } from "react-router-dom";
import group from "../assets/images/group.png";

const Info = () => {
  const { info } = useLoaderData();

  return (
    <>
      <img src={group} alt="image" />
      <section className="font-bold mt-5">
        {info.map((data) => {
          return data.synopsis;
        })}
      </section>
    </>
  );
};

export default Info;
