import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const BodyProps = (props) => {
  // const [clicked, setClicked] = useState(false);
  return (
    // className="w-full bg-black"
    <section>
      <div className="">
        <div className="body-props">
          <h1 className="">{props.header}</h1>
          <p>{props.paragraph}</p>
          <button className="request-btn">
            {props.button}
          </button>
        </div>
      </div>
      {/* Inline CSS for click animation */}
      <style>{`
        .animate-click {
          animation: click-animation 0.5s ease-out;
        }

        @keyframes click-animation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default BodyProps;
