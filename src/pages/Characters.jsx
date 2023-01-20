import React from "react";
import { useLoaderData } from "react-router-dom";

const Characters = () => {
  const { characters } = useLoaderData();
  return (
    <div>
      Characters Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Sapiente optio, illo quam veniam dicta, culpa deleniti temporibus,
      voluptate quidem modi quaerat autem? Perspiciatis eos eveniet quisquam
      vero aliquam, officia, eligendi ipsa alias doloremque similique blanditiis
      dicta vel debitis? Laudantium nam eius doloremque! Tenetur, cum quisquam
      voluptate repellendus officiis dolor ipsum amet cupiditate esse totam
      labore magnam excepturi fuga alias numquam quos quam eum, reprehenderit
      eos aut quasi sunt. Error suscipit, incidunt corporis neque minima velit
      necessitatibus autem iste magnam eos alias aperiam, animi placeat
      repellendus fugit ab doloremque excepturi iure quis! Laudantium ratione
      odio inventore quia ut quae neque cumque.
      {characters.map((data) => {
        console.log(data);
      })}
    </div>
  );
};

export default Characters;
