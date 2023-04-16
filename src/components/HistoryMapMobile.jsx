import {
  Box,
  Flex,
  SkeletonText,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api'
import {useEffect, useRef, useState} from 'react'

const center = {lat: 13.736717, lng: 100.523186}

const HistoryMobileMap = (props) => {
  const positionSet = props.positionSet
  const [sumPosition, setSumPosition] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  useEffect(() => {
    setSumPosition(positionSet)
  },[positionSet])

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  return (
      <>
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='right'
            h='60vh'
            w='90vw'
        >
          <Box position='absolute' left={0} top={0} h='100%' w='100%'>
            {/* Google Map Box */}
            <GoogleMap
                center={center}
                zoom={10.8}
                mapContainerStyle={{ width: '100%', height: '100%' }}
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
            </GoogleMap>
          </Box>
        </Flex>
      </>
  )
}

export default HistoryMobileMap
