import React , {useState} from 'react'
import Wrapper from './components/wrapper'
import { makeStyles } from '@material-ui/core';
import Navigation from './components/nav/Navigation';

const useStyle = makeStyles((theme)=>({

}))
export default function App() {
  const classes = useStyle();
  const [backgroundImage , setBackgroundImage] = useState('green');
  return (
    <div className={classes.root}
      style={{
        backgroundColor:backgroundImage,
        backgroundImage:`url(${backgroundImage})`, 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    }}
    >
      <Navigation setBackgroundImage={setBackgroundImage}/>
      <Wrapper /> 
      
    </div>
  )
}
