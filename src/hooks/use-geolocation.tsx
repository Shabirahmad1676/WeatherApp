import type { Coordinates } from "@/API/types";
import { error } from "console";
import { posix } from "path";
import { useEffect, useState } from "react";

interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoaded: boolean;
}

export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    // here at initial there is no error , no lon&lat and loaded is true because data is fetching
    coordinates: null,
    error: null,
    isLoaded: true,
  });

  // The getLocation function is responsible for fetching the user's geolocation using the navigator.geolocation.getCurrentPosition API.
  const getLocation = () => {
    // Initially, it sets isLoaded to true and clears any previous errors.
    setLocationData((prev) => ({ ...prev, isLoaded: true, error: null }));

    // This checks if the browser supports geolocation.
    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geo location is not supported by browser",
        isLoaded: true,
      });
      return;
    }

    // If geolocation is supported, it calls getCurrentPosition to retrieve the current position. This function takes two callbacks:
    // The success callback is invoked when the position is successfully retrieved. It updates the coordinates with the latitude and longitude, and sets isLoaded to false (indicating data is being fetched).
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoaded: false,
        });
      },
      (error) => {
        let errorMessage: string;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }

        setLocationData({
          coordinates: null,
          error: errorMessage,
          isLoaded: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}




// Final Flow:
// On component mount: getLocation is called to fetch geolocation data.

// If the browser does not support geolocation, an errr messoage is shown.

// If geolocation is supported, the coordinates are fetched .

// If an error occurs (e.g., permission denied), an appropriate error message is shown.

// The state is updated with the location data or error, and the component can react accordingly.