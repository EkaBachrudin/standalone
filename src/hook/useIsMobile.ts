import { useEffect, useState } from "react";

const useIsMobile = () => {
  const isClient = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(() => isClient ? window.innerWidth < 1024 : false);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return isMobile;
};

export default useIsMobile;