import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const renderedOptions = options.map((option) => {
        if (option === selected) {
            return null;
        }
        return (
            <div
                key={option.label}
                onClick={() => onSelectChange(option)}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        const bodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', bodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', bodyClick, {
                capture: true,
            });
        };
    }, []);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? 'active visible' : ''
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div
                        className="text"
                        style={{ color: `${selected.value}` }}
                    >
                        {selected.label}
                    </div>
                    <div className={`menu ${open ? 'transition visible' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
