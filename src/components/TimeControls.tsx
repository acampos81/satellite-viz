import { useState } from "react";

export default function TimeControls() {
  const [timeScale, setTimeScale] = useState(1);

  function updateTimeScale(value: number) {
    let newValue = timeScale + value;
    if (newValue <= 1) {
      setTimeScale(1);
    } else {
      setTimeScale(newValue);
    }
  }

  return (
    <div id="timeControls">
      <button onClick={() => updateTimeScale(-10)}>{"<<"}</button>
      <button onClick={() => updateTimeScale(-1)}>{"<"}</button>
      <label> Time Scale: {timeScale} </label>
      <button onClick={() => updateTimeScale(1)}>{">"}</button>
      <button onClick={() => updateTimeScale(10)}>{">>"}</button>
    </div>
  );
}
