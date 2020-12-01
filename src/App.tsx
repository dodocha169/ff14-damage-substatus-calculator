import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Label, Input } from '@rebass/forms'
import { Box, Heading, Button } from 'rebass'
import {calculateDirectHit} from './DirectHit';


const App: React.FC =() => {
    const [ directHit, setDirectHit ] = useState<number>(0)
  return (
    <Box>
    <Label>DirectHit</Label>
    <Input
        id='directHit'
        placeholder='380'
        onChange= {(input) => {
            const value = input.target.value
            const num = Number(value)
            setDirectHit(num)
        }}
    />
    <Label>{calculateDirectHit(380,directHit)*100}%</Label>
    </Box>    

  );
}

export default App;
