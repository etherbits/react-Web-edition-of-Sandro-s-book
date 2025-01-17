import { useState, useEffect } from "react";

const getRelativeWidth = (absoluteWidth) => {
  return absoluteWidth / window.innerWidth;
};

export const useRelativeWidth = (absoluteWidth) => {
  const [relativeWidth, setRelativeWidth] = useState(
    getRelativeWidth(absoluteWidth)
  );

  useEffect(() => {
    const resizeHandler = () => {
      setRelativeWidth(getRelativeWidth(absoluteWidth));
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return [relativeWidth];
};
