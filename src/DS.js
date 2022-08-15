// frontend/src/App.js

import * as React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

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

import ResponsiveAppBar from "./Components/ResponsiveAppBar(DS)";

import JupyterViewer from "react-jupyter-notebook";
import BitBot from "./Assets/Notebooks/BitBot.ipynb";
import DoctorRoster from "./Assets/Notebooks/DoctorRoster.ipynb";

import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";

export default function DWML({ navigation }) {


  const [alignment, setAlignment] = React.useState("BitBot");

  const handleNotebookChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const returnFocusNotebook = () =>{

    if (alignment== "BitBot"){
        return(BitBot)
    }
    else{
        return(DoctorRoster)
    }


  }





  const DARK_MODE = true;

  return (
    <main className="content">
      <ResponsiveAppBar />
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3" style={{ borderRadius: 20 }}>
            <Box
              sx={{ flexGrow: 1 }}
              style={{ paddingBottom: "2.8rem", paddingTop: "1.8rem" }}
            >
              <Grid direction="row" container spacing={1}>
                <Grid container item sm={6} style={{ paddingRight: "20px" }}>
                  <Grid
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      Ever wondered if you could have bought a Lamborghini if
                      you had just invested in that one crypto currency when it
                      was first released?
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        paddingTop: "40px",
                      }}
                    >
                      Imagine you bought in the first week it launched on an
                      exchange and sold at the average price of the last month
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item sm={6}>
                  <Grid
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      variant="h7"
                      color="text.secondary"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      Which notebook would you like to look at?
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
                  >
                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleNotebookChange}
                      style={{ borderRadius: 40 }}
                    >
                      <ToggleButton value="BitBot">
                        BitBot <SmartToyIcon />
                      </ToggleButton>
                      <ToggleButton value="RoctorDostor">
                        Roctor Dostor <LocalHospitalIcon />
                      </ToggleButton>

                    </ToggleButtonGroup>
                  </Grid>



                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>

      <div>
        <JupyterNotebookViewer
          filePath={returnFocusNotebook()}
          className="notebook-class"
          notebookInputLanguage="python"
          // notebookOutputLanguage="python"
          inputCodeDarkTheme={DARK_MODE}
          outputDarkTheme={DARK_MODE}
          inputMarkdownDarkTheme={DARK_MODE}
          showInputLineNumbers={true}
          showOutputLineNumbers={false}
          // outputTextClassName="output-text"
          // inputTextClassName="input-text"
          // outputBlockClassName="output-block"
          // outputImageClassName="output-image"
          // outputOuterClassName="output-outer"
          // inputOuterClassName="input-outer"
          // outputBorderClassName="output-border"
          // inputBorderClassName="input-border"
          // outputTableClassName="output-table"
          // inputMarkdownBlockClassName="input-markdown-block"
          // inputCodeBlockClassName="input-code-block"
          withOnClick={true}
          hideCodeBlocks={false}
          hideMarkdownBlocks={false}
          hideAllOutputs={false}
          hideAllInputs={false}
        />
      </div>
    </main>
  );
}
