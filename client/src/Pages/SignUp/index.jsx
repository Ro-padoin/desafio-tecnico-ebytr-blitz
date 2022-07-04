import * as React from 'react';
import axiosInstances from '../../helpers/axiosInstance';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/MyContext';

const theme = createTheme();

function SignUp() {
  const navigate = useNavigate();
  const [errorDB, setErrorDB] = React.useState();

  const { references, setToken, clearFields } = React.useContext(MyContext);

  const fetchApi = async (userData) => {
    try {
      const { data } = await axiosInstances.post('/signup', { ...userData });
      setToken(data);
      navigate('/tasks');
    } catch (error) {
      setErrorDB(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email-register'),
      password: data.get('password-register'),
    };
    await fetchApi(userData);
    clearFields();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  inputRef={references.firstNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  inputRef={references.lastNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email-register'
                  label='Email Address'
                  name='email-register'
                  autoComplete='email'
                  inputRef={references.emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password-register'
                  label='Password'
                  type='password'
                  id='password-register'
                  autoComplete='new-password'
                  inputRef={references.passwordRef}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      {errorDB && <h2>{errorDB}</h2>}
    </ThemeProvider>
  );
}

export default SignUp;
