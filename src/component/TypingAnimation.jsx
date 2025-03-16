import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Front End Developer", "React.js Developer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return <span ref={typedRef} />;
};

export default TypingAnimation;
