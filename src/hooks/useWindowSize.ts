import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);

  function handleResize() {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowSize({
      width,
      height,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
