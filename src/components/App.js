import React, { useState } from 'react';
import Route from './Route';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Header from './Header';

const items = [
    {
        title: 'What is React ?',
        content: 'React is A Library used to For front end development',
    },
    {
        title: 'How to View Html in React ?',
        content: 'Using JSX we make Components and Render Them on Screen',
    },
    {
        title: 'How Do We Navigate in React (Library) ?',
        content: 'Using React Router',
    },
];

const options = [
    {
        label: 'Red Color',
        value: 'red',
    },
    {
        label: 'Green Color',
        value: 'green',
    },
    {
        label: 'Blue Color',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // Uncommenting This Will cause Vriable Override from Above
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* This Will Cause Dropdown to Unmount But Event Listeners Still in the Memory You need to Remove Them (Cleanup) */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    onSelectChange={setSelected}
                    selected={selected}
                    options={options}
                    text="Select a Color"
                />
            ) : null} */}
            {/* <Translate /> */}
            {/* {showAccordion()}
            {showList()}
            {showDropdown(setSelected, selected, options, 'Select a Color')}
            {showTranslate()} */}
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    onSelectChange={setSelected}
                    selected={selected}
                    options={options}
                    text="Select a Color"
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
