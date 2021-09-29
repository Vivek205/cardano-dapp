import React from "react";
import { WithStyles, withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import MobileHeader from "./MobileHeader";
import NavBar from "./NavBar";

import SnetLogo from "snet-ui/images/logo.png";
import { styles } from "./styles";
import { navData, userActions } from "snet-ui/constants/Header";

type HeaderProps = WithStyles<typeof styles> & {
  fixHeader: boolean;
};

const Header = ({ classes, fixHeader }: HeaderProps) => {
  return (
    <div className={`${classes.header} ${fixHeader ? classes.addBgColor : ""}`}>
      <div className={classes.wrapper}>
        <Grid container>
          <Grid item md={3} className={classes.logoSection}>
            <MobileHeader navigationData={navData} userActions={userActions} />
            <h1>
              <Link to="/" className={classes.logoAnchor}>
                <img src={SnetLogo} alt="SingularityNET" />
              </Link>
            </h1>
          </Grid>
          <Grid item md={6} className={classes.navigationSection}>
            <NavBar navigationData={navData} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
