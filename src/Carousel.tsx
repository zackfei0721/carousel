import React, { useEffect, useState, ReactNode } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from './Carousel.module.css';

interface CarouselProps {
    children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(current === children.length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(timer);
}, [current, children.length]);

if (!Array.isArray(children) || children.length <= 0) {
    return null;
}

return (
    <section className={styles.carousel}>
        <FaArrowAltCircleLeft className={styles['left-arrow']} onClick={() => setCurrent(current === 0 ? children.length - 1 : current - 1)} />
        {children.map((child, index) => (
            <div className={index === current ? `${styles.slide} ${styles.active}` : styles.slide} key={index}>
                {index === current && (child)}
            </div>
        ))}
        <FaArrowAltCircleRight className={styles['right-arrow']} onClick={() => setCurrent(current === children.length - 1 ? 0 : current + 1)} />
    </section>
);
}

export default Carousel;