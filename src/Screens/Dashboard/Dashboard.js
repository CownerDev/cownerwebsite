import React from "react";
// import clsx from "clsx";
import {
  Typography,
  Container,
  Box,
} from "@material-ui/core";
// import { MenuIcon, ChevronLeftIcon } from "@material-ui/icons";
// import styles from "./DashboardStyles";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header/Header";

function Dashboard() {
  const drawerWidth = 240;

  const styles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: { textAlign: "center", fontsize: 68 },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(10),
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  }));
  const classes = styles();
  // const [open, setOpen] = React.useState(true);
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // const dashboardStyles = styles();
  return (
    // <div className={classes.root}>
    //   <CssBaseline />
    //   <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    //     <Toolbar className={classes.toolbar}>
    //       <IconButton
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={() => {
    //           setOpen(true);
    //         }}
    //         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
    //         Cowner's
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     variant="permanent"
    //     classes={{
    //       paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    //     }}
    //     open={open}
    //   >
    //     <div className={classes.toolbarIcon}>
    //       <IconButton
    //         onClick={() => {
    //           setOpen(false);
    //         }}
    //       >
    //         <ChevronLeftIcon />
    //       </IconButton>
    //     </div>
    //   </Drawer>
    //   <main className={classes.content}>
    //     <div className={classes.appBarSpacer} />
    //     <Container maxWidth="lg" className={classes.container}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} md={8} lg={9}>
    //           <Paper className={fixedHeightPaper}></Paper>
    //         </Grid>
    //         <Grid item xs={12} md={4} lg={3}>
    //           <Paper className={fixedHeightPaper}></Paper>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Paper className={classes.paper}></Paper>
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </main>
    // </div>
    // <div className={dashboardStyles.Dashboard}>
    //   <Button variant="contained">
    //     <NavLink to="/portfolio">Portfolio</NavLink>
    //   </Button>
    // </div>
    <Box className={classes.box}>
      <Container className={classes.container} maxWidth="sm">
        <Header></Header>
      </Container>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        Coming soon!
      </Typography>
    </Box>
  );
}
export default Dashboard;
