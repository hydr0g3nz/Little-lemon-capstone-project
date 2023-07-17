import React from "react";

function About({ className }) {
  return (
    <div className={className}>
      <p>
        Product rating:{" "}
        <meter
          class="average-rating"
          min="0"
          max="5"
          value="4.3"
          title="4.3 out of 5 stars"
        >
          4.3 out of 5
        </meter>
      </p>
    </div>
  );
}

export default About;
