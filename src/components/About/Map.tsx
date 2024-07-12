import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ComponentTitle from "../shared/ComponentTitle";

const Map = () => {
  return (
    <div className="max-w-3xl w-full mx-auto mt-28 -z-20">
      <ComponentTitle title="Visit Us" subTitle="Our Location can be found from the map" />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "400px", width: "100%", zIndex: '-100000' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Wilderness wonders
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
