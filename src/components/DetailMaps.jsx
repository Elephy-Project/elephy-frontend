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
} from '@react-google-maps/api'
import {useEffect, useRef, useState} from 'react'

const center = {lat: 13.736717, lng: 100.523186}

const DetailMaps = (props) => {
  const position = props.position
  const [notiPosition, setNotiPosition] = useState();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  useEffect(() => {
    setNotiPosition(position)
  },[position])

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

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
          h='85vh'
          w='50vw'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
          {/* Google Map Box */}
          <GoogleMap
              center={center}
              zoom={11}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
          >
            <Marker position={notiPosition} />
            {/*{directionsResponse && (*/}
            {/*    <DirectionsRenderer directions={directionsResponse} />*/}
            {/*)}*/}
          </GoogleMap>
        </Box>
      </Flex>
      </>
  )
}

export default DetailMaps
