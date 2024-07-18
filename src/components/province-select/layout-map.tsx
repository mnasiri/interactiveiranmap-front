import './layoutmap.css';
import MApp from './MapApp';
import PApp from './ProvinceMapApp';
import React, {useEffect} from "react";
import {mapData} from '../../data/list'
import {defaultData} from '../../data/defaultData'
import {useState} from "react";

function App() {
    // const default_province = {name: "tehran", faName: "تهران"}
    const [selectedProvince, setSelectedProvince] = useState();

    return (
        <div>
            <div className="root">
                <PApp thePMapData={defaultData} selectedProvince={selectedProvince}/>
                <MApp theMapData={mapData} selectedProvince={selectedProvince} setSelectedProvince={setSelectedProvince}/>
            </div>
        </div>
    )
}

export default App