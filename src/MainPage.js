// frontend/src/App.js

import * as React from "react";
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

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

import ScienceIcon from "@mui/icons-material/Science";
import BoltIcon from "@mui/icons-material/Bolt";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import TrainIcon from '@mui/icons-material/Train';

import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";

export default function MainPage() {
  const [values, setValues] = React.useState({
    symbol: "",
    investment: "",
    useDjango: false,
  });

  const [shallowValues, setshallowValues] = React.useState({
    symbol: "",
    investment: "",
    useDjango: false,
  });

  const [Query, setQuery] = React.useState(null);

  const [alignment, setAlignment] = React.useState("flask");

  const [queryLoading, setqueryLoading] = React.useState(false);

  const handleAPIChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleToggleChange = (prop) => (event) => {
    console.log(prop);
    console.log(event.target.value);

    let val = event.target.value == "on" ? true : false;

    console.log(val);
    setValues({ ...values, [prop]: val });
  };

  const queryAPI_flask = () => {
    setqueryLoading(true);
    let config = {
      headers: { "x-api-key": "436236939443955C11494D448451F" },
      params: {
        symbol: values["symbol"],
        investment: values["investment"],
      },
    };

    if (values["symbol"] !== "" && values["investment"] !== "") {
      axios
        .get(
          "http://localhost:5000/api/v1/project/core/process_request",
          config
        )
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message !== "Symbol doesn't exist") {
            setQuery(res.data.message);
            setshallowValues({
              ...shallowValues,
              symbol: values["symbol"],
              investment: values["investment"],
            });
          } else {
            alert("That symbol doesn't exist on our target exchange");
            setValues({ ...values, symbol: "" });
          }
          setqueryLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert(
            "That symbol doesn't exist on our target exchange or the api is not running"
          );
          setValues({ ...values, symbol: "", investment: "" });
          setqueryLoading(false);
        });
    } else {
      alert("Please input a symbol and investment amount");
      setqueryLoading(false);
    }
  };

  const queryAPI_django = () => {
    setqueryLoading(true);
    let config = {
      //headers: {'x-api-key': '436236939443955C11494D448451F'},
      params: {
        symbol: values["symbol"],
        investment: values["investment"],
      },
    };

    console.log("Query Django api");

    if (values["symbol"] !== "" && values["investment"] !== "") {
      axios
        .get("http://127.0.0.1:8000/api/v1/process_request/", config)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message !== "Symbol doesn't exist") {
            setQuery(res.data.message);
            setshallowValues({
              ...shallowValues,
              symbol: values["symbol"],
              investment: values["investment"],
            });
            setqueryLoading(false);
          } else {
            alert("That symbol doesn't exist on our target exchange");
            setValues({ ...values, symbol: "" });
            setqueryLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(
            "That symbol doesn't exist on our target exchange or the api is not running"
          );
          setValues({ ...values, symbol: "", investment: "" });
          setqueryLoading(false);
        });
    } else {
      alert("Please input a symbol and investment amount");
      setqueryLoading(false);
    }
  };

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
      <AppBar position="static" style={{ backgroundColor: "#3E4145" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Dude, Where's My{" "}
              <span style={{ color: "#F7E300", paddingLeft: "20px" }}>
                {" "}
                Lambo{" "}
              </span>
              ?
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="row" style={{ paddingTop: "20px"}}>
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3" style={{ borderRadius: 20 }}>

          <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: '2.8rem', paddingTop:'1.8rem' }}>
            <Grid direction="row" container spacing={1}>
              <Grid container item sm={6} style={{paddingRight:'20px'}}>
                <Grid item xs={12} justifyContent="center" alignItems="center">
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Ever wondered if you could have bought a Lamborghini if you
                  had just invested in that one crypto currency when it was
                  first released?
                  </Typography>
                </Grid>

                <Grid item xs={12} justifyContent="center" alignItems="center">
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      paddingTop:'40px'
                    }}
                  >
                    Imagine you bought in the first week it launched on an exchange and sold at the average price of the last month
                  </Typography>
                </Grid>

              </Grid>
              <Grid container item sm={6}>
              <Grid item xs={12} justifyContent="center" alignItems="center">
                  <Typography
                    variant="h7"
                    color="text.secondary"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Which API would you like to target?
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
                    onChange={handleAPIChange}
                    style={{ borderRadius: 40 }}
                  >
                    <ToggleButton value="flask">
                      Flask <ScienceIcon />
                    </ToggleButton>
                    <ToggleButton value="django">
                      Django <LinkOffIcon />
                    </ToggleButton>
                    <ToggleButton value="fastapi" disabled>
                      FastAPI <BoltIcon />
                    </ToggleButton>
                    <ToggleButton value="express" disabled>
                      Express <TrainIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Crypto Symbol"
                    variant="outlined"
                    value={values["symbol"]}
                    onChange={handleChange("symbol")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number"
                    label="Initial Investment ($)"
                    type="number"
                    value={values["investment"]}
                    onChange={handleChange("investment")}
                  />
                </Grid>
              </Grid>
            </Grid>

            </Box>

            {queryLoading && (
              <CustomLoadingButton loading variant="outlined">
                Submit
              </CustomLoadingButton>
            )}

            {!queryLoading && (
              <CustomButton
                variant="contained"
                onClick={() =>
                  alignment == "flask" ? queryAPI_flask() : queryAPI_django()
                }
              >
                How many Lambos?
              </CustomButton>
            )}

            {Query && (
              <Grid
                container
                style={{ paddingTop: "40px" }}
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    <Typography variant="body2" color="text.secondary">
                      Number of Coins Initially Bought
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                      {shallowValues["symbol"]} :{" "}
                      {Number(Query["NUMBERCOINS"].toFixed(5))}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Typography variant="body2" color="text.secondary">
                      Net Profit (Gross Profit - Investment)
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                      $ {Query["PROFIT"]}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Typography variant="body2" color="text.secondary">
                      Growth Factor
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                      X {Query["GROWTHFACTOR"]}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Typography variant="body2" color="text.secondary">
                      Initial Investment
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                      $ {shallowValues["investment"]}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <Tooltip
                      title="Assuming your average Lamborghini costs $200000"
                      arrow
                    >
                      <Typography variant="body2" color="text.secondary">
                        Number of Lambos
                      </Typography>
                    </Tooltip>

                    <Typography variant="h4" color="text.secondary">
                      {Query["LAMBOS"]}
                    </Typography>

                    {Math.floor(Query["LAMBOS"]) < 10 && (
                      <StyledRating
                        style={{ paddingTop: "20px" }}
                        size="large"
                        defaultValue={Math.floor(Query["LAMBOS"])}
                        precision={0.5}
                        max={Math.floor(Query["LAMBOS"])}
                        readOnly
                        icon={<NoCrashIcon fontSize="inherit" />}
                      />
                    )}
                    {Math.floor(Query["LAMBOS"]) > 10 && (
                      <div>
                        <Typography variant="h6" color="text.secondary">
                          Too Many to show here, you made it to the moon!
                        </Typography>
                        <StyledRating
                          style={{ paddingTop: "20px" }}
                          size="large"
                          defaultValue={5}
                          precision={0.5}
                          max={5}
                          readOnly
                          icon={<NoCrashIcon fontSize="inherit" />}
                        />
                      </div>
                    )}
                  </Item>
                </Grid>
              </Grid>
            )}

            <Paper
              sx={{
                marginTop: "calc(10% + 60px)",
                position: "fixed",
                bottom: 0,
                width: "100%",
              }}
              component="footer"
              square
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
