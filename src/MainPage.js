// frontend/src/App.js

import * as React from 'react';
import {
  Button,
} from "reactstrap";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
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

    if(values['symbol'] !== '' && values['investment'] !== ''){

    axios
      .get("http://localhost:5000/api/v1/project/core/process_request", config)
      .then(res => {
        console.log(res.data.message)
        if(res.data.message !== 'Symbol doesn\'t exist'){
          setQuery(res.data.message)
          setshallowValues({...shallowValues,symbol:values['symbol'],investment:values['investment']})
        }
        else{
          alert('That symbol doesn\'t exist on our target exchange')
          setValues({ ...values, symbol: '' });
        }
        })
      .catch(err =>{ 
        console.log(err)
        alert('That symbol doesn\'t exist on our target exchange')
      setValues({ ...values, symbol: '',investment:'' });});
    }
    else{
      alert('Please input a symbol and investment amount')
    }
      
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ffdc64',
    },
    '& .MuiRating-iconHover': {
      color: '#ffdc64',
    },
  });





    return (
      <main className="content">
        
        <h1 className="text-white text-uppercase text-center my-4">Dude, Where's My <span style={{color:'#ffdc64'}}>Lambo</span>?</h1>
        <p className="text-white text-uppercase text-center my-4">Ever wondered if you could have bought a Lamborghini if you had just invested in that one crypto currency when it was first released?</p>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">

              <div className="my-5 tab-list" >
              <TextField id="outlined-basic" label="Crypto Symbol" variant="outlined" value={values['symbol']} onChange={handleChange('symbol')} />
              </div>

              <div className="my-5 tab-list" >
              <TextField
          id="outlined-number"
          label="Initial Investment ($)"
          type="number"
          value={values['investment']}
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
                Number of Coins Initially Bought
              </Typography>


              <Typography variant="h4" color="text.secondary">
                {shallowValues['symbol']} : {Number((Query['NUMBERCOINS']).toFixed(5))}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <Typography variant="body2" color="text.secondary">
                 Net Profit (Gross Profit - Investment)
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

              <StyledRating
              style={{paddingTop:'20px'}}
              size="large"
        defaultValue={Math.floor(Query['LAMBOS'])}
        precision={0.5}
         max={Math.floor(Query['LAMBOS'])}
         readOnly
        icon={<AttachMoneyOutlinedIcon fontSize="inherit" />}
      />
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

