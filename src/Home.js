// frontend/src/App.js

import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import Tooltip from "@mui/material/Tooltip";

import tothemoon from "./Assets/moon.gif";
import whenlambo from "./Assets/whenlambo.gif";
import emptybox from "./Assets/emptybox.gif";
import rocket from "./Assets/rocket.gif";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

import ScienceIcon from "@mui/icons-material/Science";
import BoltIcon from "@mui/icons-material/Bolt";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import TrainIcon from "@mui/icons-material/Train";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";

import ResponsiveAppBar from "./Components/ResponsiveAppBar(Home)";

import LamboImage from "./Assets/DWML.jpg"
import DSImage from "./Assets/datascience.jpg"
import DAImage from "./Assets/DataAnalysis.jpg"

export default function Home() {



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#F7E300",
    },
    "& .MuiRating-iconHover": {
      color: "#F7E300",
    },
  });

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "black",
    borderRadius: 20,
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "#F2F2F2",
    borderColor: "black",
    borderWidth: "20px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  }));

  const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
    color: "black",
    borderRadius: 20,
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  }));

  return (
    <main className="content">
      <ResponsiveAppBar />

      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <Box
            sx={{ flexGrow: 1 }}
            style={{ paddingBottom: "2.8rem", paddingTop: "1.8rem" }}
          >
            <Grid direction="row" container spacing={12}>
              <Grid container item sm={4}>
              <Link to={'/DWML'} style={{ textDecoration: 'none' }}>
                <Card sx={{ minWidth: 345, minHeight:520, borderRadius:10 }} >
                  <CardActionArea sx={{ minWidth: 345, minHeight:540,textDecoration: 'none' }}>
                    <CardMedia
                      height="350"
                      component="img" 
                      src={LamboImage}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dude, where's my Lambo?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Dude, where's my lambo is a fully fledged software development project from A-Z, showcasing the full lifecycle of a software development project, duplicated across three seperate web frameworks as backends
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Link>
              </Grid>

              <Grid container item sm={4}>
                <Card sx={{ minWidth: 345, minHeight:520, borderRadius:10 }}>
                  <CardActionArea sx={{ minWidth: 345, minHeight:540 }}>
                    <CardMedia
                      height="350"
                      component="img" 
                      src={DSImage}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Data Science Projects
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        A collection of my data science related notebooks; these notebooks are trying to tackle challenges I see in my every day life, or those that are interesting
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid container item sm={4}>
                <Card sx={{ minWidth: 345, minHeight:520, borderRadius:10 }}>
                  <CardActionArea sx={{ minWidth: 345, minHeight:540 }}>
                    <CardMedia
                      height="350"
                      component="img" 
                      src={DAImage}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Data Analysis Projects
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        To round off my own learnings, the data analyst projects tackle the nuts and bolts that the leader of a tech team should know when doing data wrangling at scale
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </main>
  );
}
