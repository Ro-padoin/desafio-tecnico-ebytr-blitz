import * as React from 'react';
import axiosInstances from '../../helpers/axiosInstance';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/MyContext';

const theme = createTheme();

function SignIn() {
  const navigate = useNavigate();
  const [errorDB, setErrorDB] = React.useState();

  const { references, setToken, clearFields } = React.useContext(MyContext);

  const fetchApi = async (login) => {
    try {
      const { data } = await axiosInstances.post('/signin', { ...login });
      setToken(data);
      navigate('/tasks');
    } catch (error) {
      setErrorDB(error?.response?.data?.message || 'Mensagem qualquer');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login = {
      email: data.get('email'),
      password: data.get('password'),
    };
    await fetchApi(login);
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
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              role='email-signin'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              inputRef={references.emailRef}
            />
            <TextField
              margin='normal'
              role='password-signin'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              // autoComplete='current-password'
              inputRef={references.passwordRef}
            />
            {/* <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            /> */}
            <Button
              role='button-signin'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid> */}
              {/* <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
      </Container>
      {errorDB && <h2>{errorDB}</h2>}
    </ThemeProvider>
  );
}

export default SignIn;
