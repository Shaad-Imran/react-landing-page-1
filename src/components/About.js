import React from "react";

export default function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quidem
          vero est perferendis cumque expedita quam optio, rerum, tenetur
          cupiditate fugit laboriosam tempore non ipsum molestias eum eos omnis
          quas sequi, commodi aspernatur ad. Voluptas!
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}
