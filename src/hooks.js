import { useEffect, useRef } from "react";

export const useResizeObserver = (element, callback) => {

    const current = element && element.current;

    const observer = useRef(null);

    useEffect(() => {
        // if we are already observing old element
        observer && observer.current
            && current && observer.current.unobserve(current);

        observer.current = new ResizeObserver(callback);

        current && observer.current && observer.current.observe(current);

        return () => {
            if (observer && observer.current && current) {
                observer.current.unobserve(current);
            }
        };
    }, [current]);

};
