import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const [hover, setHover] = useState(false);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
            cursorInnerRef.current.style.left = `${x}px`;
            cursorInnerRef.current.style.top = `${y}px`;
        };

        // Handle mouse down and up
        const handleMouseDown = () => {
            cursorRef.current.classList.add("click");
            cursorInnerRef.current.classList.add("cursorinnerhover");
        };

        const handleMouseUp = () => {
            cursorRef.current.classList.remove("click");
            cursorInnerRef.current.classList.remove("cursorinnerhover");
        };

        // Handle hover state for links and buttons
        const handleHover = (e) => {
            setHover(true);
        };

        const handleLeave = (e) => {
            setHover(false);
        };

        // Event Listeners
        document.addEventListener("mousemove", handleMouseMove);
        // document.addEventListener("mousedown", handleMouseDown);
        // document.addEventListener("mouseup", handleMouseUp);

        const aTags = document.querySelectorAll("a");
        const buttons = document.querySelectorAll("button");

        aTags.forEach((item) => {
            item.addEventListener("mouseover", handleHover);
            item.addEventListener("mouseleave", handleLeave);
        });

        buttons.forEach((item) => {
            item.addEventListener("mouseover", handleHover);
            item.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            // document.removeEventListener("mousedown", handleMouseDown);
            // document.removeEventListener("mouseup", handleMouseUp);

            aTags.forEach((item) => {
                item.removeEventListener("mouseover", handleHover);
                item.removeEventListener("mouseleave", handleLeave);
            });

            buttons.forEach((item) => {
                item.removeEventListener("mouseover", handleHover);
                item.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={cursorInnerRef} className={`cursor2 ${hover ? "hover" : ""}`}></div>
        </>
    );
};

export default CustomCursor;
