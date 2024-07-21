import React from 'react';
import './Home.css';
import Section01 from './sections/Section01';
import Section02 from './sections/Section02';
import Section03 from './sections/Section03';

const Main = () => {
    return (
        <main>
            <Section01 />
            <Section02 />
            <Section03 />
        </main>
    );
};

export default Main;
