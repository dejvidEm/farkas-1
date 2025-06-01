"use client"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 48.1482, // Bratislava coordinates - adjust these to your clinic's location
  lng: 17.1067,
}

export default function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
} 