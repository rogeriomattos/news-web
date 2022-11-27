import { useEffect, useState } from "react"

export const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined'? window.innerWidth : undefined);

  useEffect(() =>  {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return width; 
}