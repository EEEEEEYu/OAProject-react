import React from 'react';
import 'antd/dist/antd.css'
import {List,Card} from "antd";

const data = [
    {
        title: 'Title 1',
        content: "content 1"
    },
    {
        title: 'Title 2',
        content: "content 2"
    },
    {
        title: 'Title 3',
        content: "content 3"
    },
    {
        title: 'Title 4',
        content: "content 4"
    },
    {
        title: 'Title 5',
        content: "content 5"
    },
    {
        title: 'Title 6',
        content: "content 6"
    },
]

class RecommenderList extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>{item.content}</Card>
                    </List.Item>
                )}
            />
        )
    }
}

export default RecommenderList;