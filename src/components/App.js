import 'antd/dist/antd.css';

import IconAndTitle from "./IconAndTitle";
import RecommenderList from "./RecommenderList";
import PriceList from "./PriceList";


function App() {
    return (
        <div>
            <IconAndTitle/>
            <RecommenderList/>
            <PriceList/>
        </div>
    );
}

export default App;
