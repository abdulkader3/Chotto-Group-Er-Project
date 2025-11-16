"use client";
import * as React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Text from "@/app/Components/contact/utill/Text";

const Location = () => {
  return (
    <>
      <section id="googlemap" className="mt-[120px] bg-[#F9FAFB] py-[100px]">
        <div className="container">
          <div className="map_row flex flex-col justify-center items-center ">
            <div className="text">
              <Text
                varaint={"h2"}
                className={"text-contactmessage text-center"}
              >
                Visit Our Office
              </Text>

              <Text varaint={"p"} className={"text-serpara text-center mt-3"}>
                Stop by for a consultation or project discussion
              </Text>
            </div>

            <div className="w-full h-[400px] rounded-2xl overflow-hidden mt-10">
              <Map
                // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
                mapboxAccessToken="pk.eyJ1Ijoic2lsbWFzdWJhaCIsImEiOiJjbWh4MnZnODcwMzNrMmtzODViaGIxZzI4In0.azTfcnH0EGbQY0WoVOgNag"
                initialViewState={{
                  latitude: 23.741317209999714,
                  longitude: 90.38257818406146,
                  zoom: 17,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <Marker
                  latitude={23.741317209999714}
                  longitude={90.38257818406146}
                  color="red"
                />
              </Map>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
