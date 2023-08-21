import React from "react";
import { WindowSize } from "./interface";

export function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState<WindowSize | undefined>();
    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}