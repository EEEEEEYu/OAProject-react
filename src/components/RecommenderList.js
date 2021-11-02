import React from 'react';
import 'antd/dist/antd.css'
import {Row, Col, Divider} from "antd";
import Title from "antd/es/typography/Title";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{border: '1px solid gray'}}>
                <div>{this.props.title}</div>
                <Divider></Divider>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

class RecommenderList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={wrapper_style}>
                <Title>Recommended</Title>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="Card title" text="Card content"/>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" text="Card content"/>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" text="Card content"/>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" text="Card content"/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const wrapper_style = {
    paddingTop: 20,
    marginLeft: 30,
    marginRight: 30
}

export default RecommenderList;