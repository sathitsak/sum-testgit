import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import ChangeStatus from "./ChangeStatus";
import AssignToSupervisor from "./AssignToSupervisor";
import Description from "./Description";
import ViewProposal from "./ViewProposal";
import ViewClient from "./ViewClient";
import Organization from "./Organization";
import store from "../../../../../store";

const styles = {
  basic: {
    marginTop: 10,
    paddingLeft: 10
  },
  infoTitle: {
    textAlign: "center",
    paddingLeft: "3%",
    paddingBottom: "3%",
    fontWeight: "bold",
    color: "#094183"
  }
};

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this._handleStoreChange = this._handleStoreChange.bind(this);
        store.subscribe(this._handleStoreChange);
    }

    _handleStoreChange() {
        this.setState(store.getState());
    }

    render() {
        const {classes} = this.props;
        const {project, supervisors, currentSupervisor} = this.state;

        return (
            <div>
                <Typography variant="h5" className={classes.infoTitle}>
                    PROJECT OUTLINE
                </Typography>
                <Grid container direction='column'>
                    <Grid item className={classes.basic}>
                        <ChangeStatus status={project.status}/>
                    </Grid>

                    <Grid item className={classes.basic}>
                      <Description description={project.description} />
                    </Grid>

                    <Grid item className={classes.basic}>
                      <ViewProposal proposalID={project.proposalID} />
                    </Grid>

                    <Grid item className={classes.basic}>
                      <ViewClient client={project.client} />
                    </Grid>

                    <Grid item className={classes.basic}>
                      <Organization industry={project.industry} />
                    </Grid>

                    <Grid item className={classes.basic}>
                        <AssignToSupervisor
                            supervisorID={project.supervisorID}
                            supervisors={supervisors}
                            currentSupervisor={currentSupervisor}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ProjectInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectInfo);
