import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import {useEffect, useRef, useState} from 'react'

const center = {lat: 13.736717, lng: 100.523186}

const DetailMaps = (props) => {
  const positionSet = props.positionSet
  const [sumPosition, setSumPosition] = useState([]);
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: 'AIzaSyAQIwA0ql01D32VSBhVjXJLm4YpeSt25R4',
    libraries: ['places'],
  })

  useEffect(() => {
    setSumPosition(positionSet)
  },[positionSet])

  console.log('sumPosition', sumPosition)
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  // async function calculateRoute() {
  //   if (originRef.current.value === '' || destiantionRef.current.value === '') {
  //     return
  //   }
  //   // eslint-disable-next-line no-undef
  //   const directionsService = new google.maps.DirectionsService()
  //   const results = await directionsService.route({
  //     origin: originRef.current.value,
  //     destination: destiantionRef.current.value,
  //     // eslint-disable-next-line no-undef
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   })
  //   setDirectionsResponse(results)
  //   setDistance(results.routes[0].legs[0].distance.text)
  //   setDuration(results.routes[0].legs[0].duration.text)
  // }

  // function clearRoute() {
  //   setDirectionsResponse(null)
  //   setDistance('')
  //   setDuration('')
  //   originRef.current.value = ''
  //   destiantionRef.current.value = ''
  // }

  return (
      <>
        {/*<Navbar/>*/}
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='right'
            h='100vh'
            w='100vw'
        >
          <Box position='absolute' left={0} top={0} h='75%' w='100%'>
            {/* Google Map Box */}
            <GoogleMap
                // center={center}
                center={center}
                zoom={11}
                mapContainerStyle={{ width: '50%', height: '100%' }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
            >
              {sumPosition.map((pos) => (
                  <Marker position={pos}/>
              ))}
              {/*<Marker position={notiPosition} />*/}
              {/*{directionsResponse && (*/}
              {/*    <DirectionsRenderer directions={directionsResponse} />*/}
              {/*)}*/}
            </GoogleMap>
          </Box>
          {/*<Box position='absolute' right={0} top={50} h='90%' w='20%'>*/}
          {/*  <Summary/>*/}
          {/*</Box>*/}
        </Flex>
      </>
  )
}

export default DetailMaps
