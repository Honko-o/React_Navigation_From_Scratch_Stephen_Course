import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        srsearch: term,
                        format: 'json',
                        origin: '*',
                    },
                }
            );

            setResults(data.query.search);
        };

        let timer;
        if (term) {
            timer = setTimeout(() => search(), 2000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [term]);

    const renderedList = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        onChange={(event) => setTerm(event.target.value)}
                        value={term}
                        className="input"
                        type="text"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedList}</div>
        </div>
    );
};

export default Search;
