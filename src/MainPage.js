// frontend/src/App.js

import * as React from 'react';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from "./components/Modal";
import Typography from '@mui/material/Typography';
import axios from "axios";

export default function MainPage() {

  const [values, setValues] = React.useState({
    symbol: '',
    investment: '',
  });

  const [shallowValues, setshallowValues] = React.useState({
    symbol: '',
    investment: '',
  });

  const [Query, setQuery] = React.useState(null);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const queryAPI = () => {
    let config = {
      headers: {'x-api-key': '436236939443955C11494D448451F'},
      params: {
        symbol: values['symbol'],
        investment:values['investment']
      },
    }

    setshallowValues({...shallowValues,symbol:values['symbol'],investment:values['investment']})

    axios
      .get("http://localhost:5000/api/v1/project/core/process_request", config)
      .then(res => setQuery(res.data.message))
      .catch(err => console.log(err));
      
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));





    return (
      <main className="content">
        
        <h1 className="text-white text-uppercase text-center my-4">Dude, Where's My <span style={{color:'#ffdc64'}}>Lambo</span>?</h1>
        <p className="text-white text-uppercase text-center my-4">Ever wondered if you could have bought a Lamborghini if you had just invested in that one crypto currency when it was first released?</p>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">

              <div className="my-5 tab-list" >
              <TextField id="outlined-basic" label="Crypto Symbol" variant="outlined" onChange={handleChange('symbol')} />
              </div>

              <div className="my-5 tab-list" >
              <TextField
          id="outlined-number"
          label="Initial Investment"
          type="number"
          onChange={handleChange('investment')}

        />
              </div>

              <Button color="success" onClick={() => queryAPI()}>
            How many Lambos?
          </Button>


          {Query &&
          <Grid container style={{paddingTop:'40px'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
            <Typography variant="body2" color="text.secondary">
                Number of Coins
              </Typography>

              <Typography variant="h4" color="text.secondary">
                {shallowValues['symbol']} : {Query['NUMBERCOINS']}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <Typography variant="body2" color="text.secondary">
                Profit
              </Typography>

              <Typography variant="h4" color="text.secondary">
              $ {Query['PROFIT']}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <Typography variant="body2" color="text.secondary">
                Growth Factor
              </Typography>

              <Typography variant="h4" color="text.secondary">
                 X {Query['GROWTHFACTOR']}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <Typography variant="body2" color="text.secondary">
                Initial Investment
              </Typography>

              <Typography variant="h4" color="text.secondary">
              $ {shallowValues['investment']}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Typography variant="body2" color="text.secondary">
                Number of Lambos
              </Typography>

              <Typography variant="h4" color="text.secondary">
                {Query['LAMBOS']}
              </Typography>
              </Item>
          </Grid>
        </Grid>
}
            </div>
          </div>
        </div>
      </main>
    );
  }

