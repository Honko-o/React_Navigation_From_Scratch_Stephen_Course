import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [text]);

    useEffect(() => {
        const translate = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: '',
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText);
        };

        translate();
    }, [language, debouncedText]);
    return <h4>{translated}</h4>;
};

export default Convert;
