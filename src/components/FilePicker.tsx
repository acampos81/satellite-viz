export default function FilePicker() {
  return (
    <div id="filepicker">
      <label htmlFor="ephemeris-csv">
        Load a .csv file containing ephemeris data
      </label>
      <input
        type="file"
        id="ephemeris-csv"
        name="ephemeris-csv"
        accept=".csv"
      />
    </div>
  );
}
