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
import {FaLocationArrow, FaTimes} from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api'
import {useRef, useState} from 'react'

const center = {lat: 13.736717, lng: 100.523186}

const CreateMaps = ({target}) => {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()


  if (!isLoaded) {
    return <SkeletonText/>
  }

  return (
      <>
        {/*<Navbar/>*/}
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='right'
            h='70vh'
            w='55vw'
        >
          <Box position='absolute' left={3} top={0} h='100%' w='100%'>
            {/* Google Map Box */}
            <GoogleMap
                center={center}
                zoom={11}
                mapContainerStyle={{width: '100%', height: '100%'}}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
            >
              {target &&
                  <Marker position={target}/>
              }
            </GoogleMap>
          </Box>
        </Flex>
      </>
  )
}

export default CreateMaps
