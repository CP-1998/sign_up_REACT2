import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <body>
      <Box id="signInCard" color='primary'>
        <p>Sign Up</p>
        <hr></hr>
        <TextField label="Enter a username..." />
        <br></br>
        <br></br>
        <TextField label="Enter a password..." />
        <br></br>
        <br></br>
        <TextField label="Enter your email..." />
        <br></br>
        <br></br>
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </Box>
    </body>
  );
}

export default App;
