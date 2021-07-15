import ReactAnimatedWeather from 'react-animated-weather';

export default function Icon(props){
  
  console.log(props)
  return(
  <ReactAnimatedWeather
   icon={`CLEAR_NIGHT`}
  color= {'white'}
  size = {100}
  animate = {true}
  />
  );
}