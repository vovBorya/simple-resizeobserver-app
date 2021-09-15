import {useEffect, useRef, useState} from "react";
import cn from "classnames";

import {useResizeObserver} from "./hooks";

import './App.scss';

const App = () => {

    const [showImg, setShowImg] = useState(false);

    const imgRef = useRef();
    const wrapperRef = useRef();

    useResizeObserver(wrapperRef, () => {
        console.log("SIZE CHANGED");
    });

    useEffect(() => {
        setTimeout(() => {
            setShowImg(true);
        }, 2000);
    }, [])

    return (
        <div ref={wrapperRef} className="app">
            <img
                ref={imgRef}
                className={cn("app__hero-img", { "show": showImg })}
                src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/how-to-use-a-scanner-hero1567111325611178.jpg"
                alt="Scanner"
            />
        </div>
    );
}

export default App;
