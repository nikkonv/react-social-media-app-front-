import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/scream/Scream";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import StaticProfile from "../components/profile/StaticProfile";

// redux
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

export class user extends Component {
  state = {
    profile: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({ profile: res.data.user });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const screamsMarkup = loading ? (
      <p>Loading data...</p>
    ) : screams === null ? (
      <p>This user doesnt have screams</p>
    ) : (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    );
    return (
      <Fragment>
        <div>
          <div>
            {this.state.profile === null ? (
              <p>Loading profile...</p>
            ) : (
              <Fragment>
                <StaticProfile profile={this.state.profile} />
                <br />
              </Fragment>
            )}
          </div>
        </div>
        <div>{screamsMarkup}</div>
      </Fragment>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(user);
