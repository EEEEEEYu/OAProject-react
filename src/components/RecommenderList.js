import React from 'react';

import GridItem from './Grid/GridItem.js';
import GridContainer from "./Grid/GridContainer";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import CardIcon from "./Card/CardIcon";
import CardFooter from "./Card/CardFooter";
import Danger from "./Typography/Danger";

import Icon from "@material-ui/core/Icon";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Accessibility, Cake, DateRange, LocalOffer, Smartphone, Store, Update, Warning} from "@material-ui/icons";

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle"
const useStyles = makeStyles(styles);


class RecommenderList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"5%"}}>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="warning">
                                    <Smartphone/>
                                </CardIcon>
                                <p className={classes.cardCategory}>Used Space</p>
                                <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                </h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Danger>
                                        <Warning />
                                    </Danger>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Get more space
                                    </a>
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
                                <h3 className={classes.cardTitle}>$34,245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <DateRange />
                                    Last 24 Hours
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
                                <h3 className={classes.cardTitle}>75</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <LocalOffer />
                                    Tracked from Github
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
                                <h3 className={classes.cardTitle}>+245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Update />
                                    Just Updated
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

const wrapper_style = {
    paddingTop: 20,
    marginLeft: 30,
    marginRight: 30
}


export default withStyles(useStyles)(RecommenderList);