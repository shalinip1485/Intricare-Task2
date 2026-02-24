import React, { useState, useEffect } from 'react';
import { FaRegCreditCard, FaRegClock } from 'react-icons/fa';

const FloatingBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollPosition = window.scrollY;

            const documentHeight = document.documentElement.scrollHeight;

            const windowHeight = window.innerHeight;

            const distanceToBottom = documentHeight - (scrollPosition + windowHeight);
            const isNearBottom = distanceToBottom < 100;

            if (scrollPosition > 300 && !isNearBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="floating-banner-container">
            <div className="floating-banner-main">
                <div className="d-flex align-items-center gap-3 floating-main-text-group">
                    <img src="/heroimg.svg" alt="Users" className="floating-avatar" />
                    <span className="floating-text">Join with our Thousands of professionals Now !</span>
                </div>
                <button className="btn btn-free-trial floating-btn">Get a Free Trial Now!</button>
            </div>
            <div className="floating-banner-footer">
                <div className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1.2rem' }}>💳</span>
                    <span className="footer-text-bold">No Credit Card <span className="footer-text-muted">Required</span></span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1.2rem' }}>🕚</span>
                    <span className="footer-text-bold">14 Days Free <span className="footer-text-muted">Trial</span></span>
                </div>
            </div>
        </div>
    );
};

export default FloatingBanner;
