import axios from 'axios';

const TileOfDevice = (props) => {


 const {name, deviceid} = props.device;
 

 const toggleDevice = async () => {

    await axios.post(`http://127.0.0.1:3001/`, {
        deviceid: deviceid
    })


 }

 return ( 
 <div className='tile'>
  <h1>{name}</h1>
  <button className='toggleDevice' onClick={toggleDevice}>Włącz</button>
 
 </div> );
}
 
export default TileOfDevice ;