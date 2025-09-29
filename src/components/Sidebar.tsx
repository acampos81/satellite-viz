import { useState } from "react";
import { Vector3 } from "three";
import { Vector3Field, FloatField, TimestampField } from "./DataFields";
import FilePicker from "./FilePicker";
import TimeControls from "./TimeControls";

export default function Sidebar() {
  const [timestamp, setTimestamp] = useState<Date>();
  const [position, setPosition] = useState<Vector3>();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div id="sidebar">
      <FilePicker />
      <br />
      <TimestampField label="Date" timestamp={timestamp ?? new Date()} />
      <br />
      <Vector3Field
        label="ECI Position (km)"
        vector3={position ?? new Vector3(0, 0, 0)}
      />
      <br />
      <Vector3Field
        label="ECI Velocity (km/s)"
        vector3={position ?? new Vector3(0, 0, 0)}
      />
      <br/>
      <FloatField label="Latitude" float={latitude} />
      <FloatField label="Longitude" float={longitude} />
      <br/>
      <TimeControls />
    </div>
  );
}
