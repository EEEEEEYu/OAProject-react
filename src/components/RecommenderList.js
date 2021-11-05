import React from 'react';

import GridItem from './Grid/GridItem.js';
import GridContainer from "./Grid/GridContainer";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import CardIcon from "./Card/CardIcon";
import CardFooter from "./Card/CardFooter";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    Accessibility, Apple,
    Cake,
    DateRange,
    LocalOffer,
    Money,
    Smartphone,
    Store,
    Update,
    Warning
} from "@material-ui/icons";

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle"
import EventBus from './EventBus'
const useStyles = makeStyles(styles);


class RecommenderList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            btcBestSellPrice: 0.0,
            btcBestSellExchange: "None",
            btcBestBuyPrice: 0.0,
            btcBestBuyExchange: "None",
            ethBestSellPrice: 0.0,
            ethBestSellExchange: "None",
            ethBestBuyPrice: 0.0,
            ethBestBuyExchange: "None"
        }
    }

    componentDidMount() {
        EventBus.addEventListener('getData', this.handleEvent)
    }

    componentWillUnmount() {
        EventBus.removeEventListener('getData', this.handleEvent)
    }

    // Update state when receiving data from the price list.
    handleEvent = (e) => {
        const binance = e.detail.binanceData;
        const bittrex = e.detail.bittrexData;
        let btcBestSellPrice = Math.max(binance['btcsellPrice'], bittrex['btcsellPrice']);
        let btcBestSellExchange = btcBestSellPrice === binance['btcsellPrice']? "Binance" :"Bittrex";

        let btcBestBuyPrice = Math.min(binance['btcbuyPrice'], bittrex['btcbuyPrice']);
        let btcBestBuyExchange = (btcBestBuyPrice === binance['btcbuyPrice'])? "Binance" :"Bittrex";

        let ethBestSellPrice = Math.max(binance['ethsellPrice'], bittrex['ethsellPrice']);
        let ethBestSellExchange = ethBestSellPrice === binance['ethsellPrice']? "Binance" :"Bittrex";

        let ethBestBuyPrice = Math.min(binance['ethbuyPrice'], bittrex['ethbuyPrice']);
        let ethBestBuyExchange = ethBestBuyPrice === binance['ethbuyPrice']? "Binance": "Bittrex";

        this.setState({
            btcBestSellPrice: btcBestSellPrice,
            btcBestSellExchange: btcBestSellExchange,
            btcBestBuyPrice: btcBestBuyPrice,
            btcBestBuyExchange: btcBestBuyExchange,
            ethBestSellPrice: ethBestSellPrice,
            ethBestSellExchange: ethBestSellExchange,
            ethBestBuyPrice: ethBestBuyPrice,
            ethBestBuyExchange: ethBestBuyExchange
        })
    }

    formatPriceDisplay(price) {
        return '$'+parseFloat(price).toFixed(2).toString()
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"5%"}}>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="rose" stats icon>
                                <CardIcon color="rose">
                                    <Apple />
                                </CardIcon>
                                <p className={classes.cardCategory}>Revenue</p>
                                <h3 className={classes.cardTitle}>{this.formatPriceDisplay(this.state.btcBestBuyPrice)}</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Money />
                                    {"BTC Best Buy:"+this.state.btcBestBuyExchange}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="success" stats icon>
                                <CardIcon color="success">
                                    <Store />
                                </CardIcon>
                                <p className={classes.cardCategory}>Revenue</p>
                                <h3 className={classes.cardTitle}>{this.formatPriceDisplay(this.state.btcBestSellPrice)}</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <DateRange />
                                    {"BTC Best Sell:"+this.state.btcBestSellExchange}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="danger" stats icon>
                                <CardIcon color="danger">
                                    <Cake/>
                                </CardIcon>
                                <p className={classes.cardCategory}>Fixed Issues</p>
                                <h3 className={classes.cardTitle}>{this.formatPriceDisplay(this.state.ethBestBuyPrice)}</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <LocalOffer />
                                    {"ETH Best Buy:"+this.state.ethBestBuyExchange}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="info" stats icon>
                                <CardIcon color="info">
                                    <Accessibility />
                                </CardIcon>
                                <p className={classes.cardCategory}>Followers</p>
                                <h3 className={classes.cardTitle}>{this.formatPriceDisplay(this.state.ethBestSellPrice)}</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Update />
                                    {"ETH Best Sell:"+this.state.ethBestSellExchange}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}


export default withStyles(useStyles)(RecommenderList);