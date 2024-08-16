import styled from '@emotion/styled';
import './App.css';
import Pricing from './pages/pricing';
import { Switch } from '@mui/material';
import { useState } from 'react';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    borderRadius: 20 / 2,
  },
}));

function App(): JSX.Element {

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-theme') === 'dark') {
      htmlElement.removeAttribute('data-theme');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
    }
  };



  return (
    <>
      <div className='main-container'>
        <MaterialUISwitch checked={checked} onChange={handleChange} />
        <Pricing />
      </div>
    </>
  );
}

export default App;


