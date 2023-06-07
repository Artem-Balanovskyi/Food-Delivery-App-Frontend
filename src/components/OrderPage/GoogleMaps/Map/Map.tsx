import React, {useCallback, useEffect, useRef, useState} from 'react'
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {defaultTheme} from "./Theme";
import {Autocomplete} from "../Autocomlpete/Autocomplete";
import {Button, Container, Stack} from "@mui/material";
import {getBrowserLocation} from "../utils/getBrowserLocation";
import {getLatLng} from "use-places-autocomplete";

const containerStyle = {
    width: '100%',
    height: '300px'
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme
}

export interface ICoordinates {
    lat: number,
    lng: number
}

const MODES = {
    MOVE: 0,
    SET_MARKER: 1
}

const defaultCenter = {
    lat: 46.482,
    lng: 30.723
}

const libraries: ("geometry" | "places" | "drawing" | "localContext" | "visualization")[] = ['places']

export const Map = () => {
    const [mapCenter, setMapCenter] = useState(defaultCenter)
    const [mode, setMode] = useState(MODES.MOVE)
    const [markers, setMarkers] = useState<ICoordinates[] | []>([])

    const mapRef = useRef(undefined)

    const {isLoaded} = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY || '',
        libraries
    })

    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map
    }, [])

    const onPlaceSelect = useCallback(
        (coordinates: ICoordinates) => {
            setMapCenter(coordinates)
        },
        []
    )

    useEffect(() => {
        getBrowserLocation().then((location) => {
            setMapCenter(location)
        })
            .catch(() => {
                setMapCenter(defaultCenter)
            })
    }, [])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        mapRef.current = undefined
    }, [])


    const onMarkerAdd = useCallback((coordinates: ICoordinates) => {
        setMarkers([...markers, coordinates])
    }, [markers])

    const onMarkersClear = useCallback(() => {
        setMarkers([])
    }, [])

    const onClick = useCallback((location: any) => {
        if (mode === MODES.SET_MARKER) {
            const lat =  location.latLng.lat()
            const lng = location.latLng.lng()
            onMarkerAdd({lat, lng})
        }
    }, [mode, onMarkerAdd])

    const toggleMode = useCallback((mode: number) => {
        switch (mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER)
                break
            case MODES.SET_MARKER:
                setMode(MODES.MOVE)
                break
            default:
                setMode(MODES.MOVE)
        }
    }, [mode])

    return isLoaded ? (
        <Container sx={{mt: '1rem'}}>
            <Container>
                <Stack direction='row'
                       spacing={2}
                       padding={2}>
                <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
                <Button
                    variant="text"
                    onClick={() => toggleMode(mode)}>
                    {mode === MODES.MOVE ? 'Set Marker' : 'Move'}
                </Button>
                    <Button
                        variant="text"
                        onClick={() => onMarkersClear()}>
                        Clear Markers
                    </Button>
                </Stack>
            </Container>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={onClick}
                options={defaultOptions}
            >
                <Marker position={mapCenter}/>
                {markers.map((location: ICoordinates) => {
                    return <Marker position={location} key={location.lat+location.lng}/>
                })}
                <></>
            </GoogleMap>
        </Container>
    ) : <></>
}

// export default React.memo(Map)