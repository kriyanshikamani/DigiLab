import React,{Fragment} from 'react'
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api'
const containerstyle={
    width:'1280px',
    height:'720px'
   };
   const center={
    lat:20.5937,
    lng:78.9629
   };
const Contectus = () => {
 
    const {isLoaded}=useJsApiLoader({
        id: 'google-map-script',
        googleMApApikey:"your API KEy" //need to define your google api key 
    })
    const [map,setMap]=React.useState(null)
    const onLoad=React.useCallback(function callback(map)
    {
        const bounds=new window.google.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    },[])
    const onUnmount =React.useCallback(function callback(map)
    {
        setMap(null)
    },[])
   return (<div style={{position:'relative'}}>
   <div style={{position:'absolute',top:10,left:10,backgroundColor:'orange',padding:25,zIndex:999}}>
    <h1>hello</h1>
   </div>
    {isLoaded?
    <GoogleMap
        mapContainerStyle={containerstyle}
        center={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
        <></>
    </GoogleMap>
    :<></>}



    </div>
  )
}

export default Contectus