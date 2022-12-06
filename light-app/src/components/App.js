import TileOfDevice from './TileOfDevice';
import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import axios from 'axios';



function App() {

      const [devices, setDevices] = useState([]);


      useEffect(() => {
        const getDevices = async () => { await axios.get('http://127.0.0.1:3001/').then((res) => {
        
        setDevices(res.data)
        

        });
       }   
        getDevices();
      });
      



      
  return (
    <div className="App">
      {
        devices.map(device => {
          return(
          <TileOfDevice key={device.deviceid} device={device}/>
          )
        })
      }
    </div>
  );
}

export default App;
