import React from "react";
import 'antd/dist/antd.css'
import {Col, Row} from "antd";
import logo from "../assets/download.png";
import Title from "antd/es/typography/Title";


class IconAndTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row style={wrapper_style}>
                <Col style={col1_style}>
                    <img src={logo} style={logo_style} className={"logo"}/>
                </Col>
                <Col style={col2_style}>
                    <Title>Discover Your Crypto Insights</Title>
                </Col>
            </Row>
        )
    }
}

const wrapper_style = {
    height:120,
    backgroundColor:"white",
    alignContent:"center"
}

const logo_style = {
    height: 100,
    width: 380,
}

const col1_style = {
    flex:1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const col2_style = {
    flex:2,
    display: "flex",
    alignItems:"center",
    paddingLeft: 20,
    paddingTop: 20,
    justifyContent:"left",
    backgroundColor:"white"
}





export default IconAndTitle;