import React from "react";
// @material-ui/core components
import {makeStyles, withStyles} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import EventBus from "./EventBus";
import axios from 'axios';

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

class PriceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            binanceData:{},
            bittrexData:{},
        };
    }

    fetchData() {
        axios.all([
            axios.get('http://localhost:8888/api/v1/getMostRecentBinancePrice'),
            axios.get('http://localhost:8888/api/v1/getMostRecentBittrexPrice')
        ]).then(axios.spread((...response)=>{
                const binance = response[0].data;
                const bittrex = response[1].data;
                this.setState({
                    binanceData: binance,
                    bittrexData: bittrex
                })
                this.sendData()
            })).catch((error) => {
                console.log(error)
            }
        );
    }

    sendData = () => {
        EventBus.dispatchEvent('getData', this.state)
    }

    componentDidMount() {
        this.interval = setInterval(()=>this.fetchData(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    formatPriceDisplay(price) {
        return '$'+parseFloat(price).toFixed(2).toString()
    }

    render() {
        const {classes} = this.props;
        return(
            <div style={{marginLeft:"10%", marginRight:"10%"}} >
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <text color={"white"}>Binance</text>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Cryptocurrency", "Buy Price", "Sell Price", "Last Updated"]}
                                    tableData={[
                                        ["BTCUSDT",
                                            this.formatPriceDisplay(this.state.binanceData['btcbuyPrice']),
                                            this.formatPriceDisplay(this.state.binanceData['btcsellPrice']),
                                            this.state.binanceData['time']],
                                        ["ETHUSDT",
                                            this.formatPriceDisplay(this.state.binanceData['ethbuyPrice']),
                                            this.formatPriceDisplay(this.state.binanceData['ethsellPrice']),
                                            this.state.binanceData['time']]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <text color={"white"}>Bittrex</text>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Cryptocurrency", "Buy Price", "Sell Price", "Last Updated"]}
                                    tableData={[
                                        ["BTCUSDT",
                                            this.formatPriceDisplay(this.state.bittrexData['btcbuyPrice']),
                                            this.formatPriceDisplay(this.state.bittrexData['btcsellPrice']),
                                            this.state.bittrexData['time']],
                                        ["ETHUSDT",
                                            this.formatPriceDisplay(this.state.bittrexData['ethbuyPrice']),
                                            this.formatPriceDisplay(this.state.bittrexData['ethsellPrice']),
                                            this.state.bittrexData['time']]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(useStyles)(PriceList);