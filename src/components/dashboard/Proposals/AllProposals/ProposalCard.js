import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import red from "@material-ui/core/colors/red";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import grey from "@material-ui/core/colors/grey"

const styles = theme => ({
    card: {
        // width: 350,
        margin: 10
    },
    avatar: {
        backgroundColor: red[500]
    },
    link: {
        float: "left",
        width: "100%",
        textDecoration: "none",
        "&:hover": {
        backgroundColor: grey[200],
        textDecoration: "none",
        },
        "&:active": {
        backgroundColor: grey[300]
        }
    },
    cardHeader: {
        paddingBottom: 0
    },
    cardContent: {
        paddingTop: 12,
        paddingBottom: 0,
    }
});

class ProposalCard extends React.Component {
    render() {
        const {classes, id} = this.props;
        return (
            <Card className={classes.card}>
                <Link
                    to={`/dashboard/proposals/${id}`}
                    id={this.props.id}
                    className={classes.link}
                >
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>
                                {/* {this.props.title.slice(0, 1).toUpperCase()} */}
                            </Avatar>
                        }
                        title={this.props.title}
                        subheader={this.props.organisation}
                        className={classes.cardHeader}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant="overline" align="left"
                                    style={{marginBottom: 5}}>
                            Client: {this.props.client}
                        </Typography>

                        <Divider component="li" paddingTop="20"/>

                        <Typography component="p" variant="overline"
                                    style={{marginTop: 5}}>
                            Supervisor: {this.props.supervisor}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        );
    }
}

export default withStyles(styles)(ProposalCard);
