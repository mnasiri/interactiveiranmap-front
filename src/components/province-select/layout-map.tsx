import './layoutmap.css';
import MApp from './MapApp';
import PApp from './ProvinceMapApp';
import React, {useEffect} from "react";
import {useState} from "react";
import {useMapStatistic, useProvinceMapStatistic} from "../api/statistics-data"
import {selectedCityType} from "react-iran-provinces-map/dist/esm/interfaces";
import {selectedProvinceType} from "react-iran-map/dist/esm/interfaces";

function App() {
    // const default_province = {name: "tehran", faName: "تهران"}
    const noSelectedProvince: selectedProvinceType = {name: undefined, faName: undefined}
    const noSelectedCity: selectedCityType = {name: undefined, faName: undefined}
    console.log('App load:', noSelectedCity, noSelectedProvince)

    const [selectedProvince, _setSelectedProvince] = useState(noSelectedProvince);
    const [selectedCity, setSelectedCity] = useState(noSelectedCity);
    const {mapStat, isLoading, isError} = useMapStatistic()
    const {provinceMapStat, isLoadingP, isErrorP} = useProvinceMapStatistic(selectedProvince?.name)

    function setSelectedProvince(value: selectedProvinceType) {
        setSelectedCity(noSelectedCity)
        _setSelectedProvince(value)
    }

    if (!isLoading && !isError)

        return (
            <div>
                <div className="root">
                    <PApp curMapData={provinceMapStat} selectedProvince={selectedProvince}
                          selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
                    <MApp theMapData={mapStat} selectedProvince={selectedProvince}
                          setSelectedProvince={setSelectedProvince}/>
                </div>
            </div>
        )
    else
        return (<div> Loading ...</div>)

}

export default App