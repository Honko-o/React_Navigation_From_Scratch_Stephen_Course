/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => setActiveIndex(index);

    const renderedItems = items.map(({ title, content }, index) => {
        const activeClass = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={title}>
                <div
                    className={`title ${activeClass}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className={`content ${activeClass}`}>
                    <p>{content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div
            className="accordion ui styled accordion"
            style={{ margin: '20px auto' }}
        >
            {renderedItems}
        </div>
    );
};

export default Accordion;
