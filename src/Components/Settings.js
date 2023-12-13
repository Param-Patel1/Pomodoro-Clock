import React,{ useContext } from "react";
import ReactSlider from "react-slider";
import '../App.css'
import Back from '../Components/Buttons/Back'
import SettingsContext from '../Components/Context/SettingsContext';

const Settings = () => {
    const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Time: {settingsInfo.workMinutes}:00</label>
      <ReactSlider 
      className="slider" 
      thumbClassName="thumb"
      trackClassName="track"
      value={settingsInfo.workMinutes}
      onChange={newValue => settingsInfo.setWorkMinutes(newValue)} 
      min={1}
      max={120}
      />
      <label>Leisure Time: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider 
      className="slider green" 
      thumbClassName="thumb"
      trackClassName="track"
      value={settingsInfo.breakMinutes}
      onChange={newValue => settingsInfo.setBreakMinutes(newValue)} 
      min={1}
      max={120}
      />
    <div style={{textAlign:'center', marginRight:'20px'}}>
        <Back onClick={() => settingsInfo.setShowSettings(false)}/>
    </div>
    </div>
  );
};
export default Settings;