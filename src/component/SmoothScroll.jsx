import React, { useState, useEffect, useRef } from 'react';

const SmoothScroll = () => {
    const scrollContainerRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const speed = 0.05;

    // Handle smooth scroll animation
    const smoothScroll = () => {
        if (scrollContainerRef.current) {
            const scrollPosition = window.pageYOffset;
            setOffset((prevOffset) => prevOffset + (scrollPosition - prevOffset) * speed);
        }
    };

    // Set up the animation loop using requestAnimationFrame
    useEffect(() => {
        const raf = requestAnimationFrame(smoothScroll);

        return () => cancelAnimationFrame(raf); // Clean up the animation frame on component unmount
    }, [offset]); // Only re-run when `offset` changes

    // Update the body's height and apply the smooth scroll transformation
    useEffect(() => {
        const body = document.body;
        const height = scrollContainerRef.current
            ? scrollContainerRef.current.getBoundingClientRect().height - 1
            : 0;

        body.style.height = `${Math.floor(height)}px`;
    }, []);

    return (
        <div
            ref={scrollContainerRef}
            style={{
                transform: `translateY(-${offset}px)`,
                transition: 'transform 0.1s ease-out',
            }}
            className="js-scroll"
        >
            {/* Add your scrollable content here */}
            <div style={{ height: '200vh' }}>
                <h1>Smooth Scroll Example</h1>
                <p>Scroll down to see the effect.</p>
            </div>
        </div>
    );
};

export default SmoothScroll;
