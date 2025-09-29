import type { Vector3 } from "three";

interface Vector3FieldProps {
  label: string;
  vector3: Vector3;
}

interface FloatFieldProps {
  label: string;
  float: number;
}

interface TimestampFieldProps {
  label: string;
  timestamp: Date;
}

export const Vector3Field: React.FC<Vector3FieldProps> = ({
  label,
  vector3,
}) => {
  return (
    <>
      <div id="fieldLabel">{label}</div>
      <div id="v3Value">
        <div>X: {vector3.x.toFixed(2)}</div>
        <div>Y: {vector3.y.toFixed(2)}</div>
        <div>Z: {vector3.z.toFixed(2)}</div>
      </div>
    </>
  );
};

export const FloatField: React.FC<FloatFieldProps> = ({ label, float }) => {
  return (
    <>
      <div id="fieldLabel">{label}</div>
      <div id="floatValue">{float}</div>
    </>
  );
};

export const TimestampField: React.FC<TimestampFieldProps> = ({
  label,
  timestamp,
}) => {
  return (
    <>
      <div id="fieldLabel">{label}</div>
      <div id="timestampValue">{timestamp.toDateString()}</div>
    </>
  );
};
