import React from "react";

interface CircleType {
  type: "Yellow" | "Sky";
}

const CircleLight = ({ type }: CircleType) => {
  return (
    <div>
      {type === "Yellow" ? (
        <div className="absolute top-[1%] left-[15%] w-[35vw] h-[35vw] bg-primary/20  rounded-full blur-3xl opacity-70 z-[-1]"></div>
      ) : (
        <div className="absolute bottom-[1%] right-[15%] w-[35vw] h-[35vw] bg-secondary/20 rounded-full blur-3xl opacity-70 z-[-1]"></div>
      )}
    </div>
  );
};

export default CircleLight;
