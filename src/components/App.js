import React from 'react';

import IconAndTitle from "./IconAndTitle";
import RecommenderList from "./RecommenderList";
import PriceList from "./PriceList";


class App extends React.Component {
    render() {
        return (
            <div>
                <IconAndTitle/>
                <RecommenderList/>
                <PriceList/>
            </div>
        );
    }
}

export default App;
