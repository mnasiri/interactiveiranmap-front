import './layoutmap.css';
import MApp from './MapApp';
import PApp from './ProvinceMapApp';
import React, {useEffect} from "react";
import {useState} from "react";

function App() {
    // const default_province = {name: "tehran", faName: "تهران"}
    const noSelectedData = {name: undefined, faName: undefined}

    const [selectedProvince, setSelectedProvince] = useState(noSelectedData);
    const [selectedCity, setSelectedCity] = useState(noSelectedData);
    const [mapData, setMapData] = useState({});
    const [pMapData, setPMapData] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/provinces')
            .then(response => response.json())
            .then(json => {
                setMapData(json);
                console.log(json);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        let p_name = selectedProvince?.name
        setSelectedCity(noSelectedData)
        if (p_name !== undefined)
            fetch('http://127.0.0.1:5000/provinces/' + selectedProvince.name)
                .then(response => response.json())
                .then(json => {
                    setPMapData(json);
                    console.log(json);
                })
                .catch(error => console.error(error));
    }, [selectedProvince]);

    return (
        <div>
            <div className="root">
                <PApp curMapData={pMapData} selectedProvince={selectedProvince}
                      selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
                <MApp theMapData={mapData} selectedProvince={selectedProvince}
                      setSelectedProvince={setSelectedProvince}/>
            </div>
        </div>
    )
}

export default App