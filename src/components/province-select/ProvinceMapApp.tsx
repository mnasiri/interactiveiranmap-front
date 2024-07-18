import {IranProvincesMap} from "react-iran-provinces-map";
import './layoutmap.css';
import {selectedCityType} from "react-iran-provinces-map/dist/cjs/interfaces";
import {mapDataType, selectedProvinceType} from "react-iran-map/dist/esm/interfaces";


interface PMAppProps {
    curMapData: mapDataType
    selectedProvince: selectedProvinceType | undefined
    selectedCity: selectedCityType | undefined
    setSelectedCity: Function
}


function PApp(defaultData: PMAppProps) {
    console.log("reload:", defaultData)
    let selectedProvince: selectedProvinceType | undefined = defaultData.selectedProvince;
    let selectedCity: selectedCityType | undefined = defaultData.selectedCity;
    let curData: any = defaultData.curMapData

    const selectProvinceHandler = (city: selectedCityType) => {
        selectedCity = city
        defaultData.setSelectedCity(city)
        curData = defaultData.curMapData
        console.log("select city:", selectedCity)

    };
    {/*"30, 70, 181"*/
    }
    if (selectedProvince?.name && defaultData.curMapData) {
        let cityName = (selectedCity?.name) || ''
        return (
            <div style={{fontFamily: "vazir"}} className="map-item">
                <h1 className="province-header">{selectedProvince.faName}</h1>
                <h2 className="province-header">{selectedCity?.faName}</h2>
                <IranProvincesMap
                    province={selectedProvince.name}
                    provinceData={curData}
                    colorRange="59, 204, 109"
                    deactiveProvinceColor="#eee"
                    selectedProvinceColor="#fc6b9d"
                    tooltipTitle="تعداد بقاع:"
                    textColor="#333"
                    width={600}
                    selectProvinceHandler={selectProvinceHandler}
                />
            </div>
        );
    } else
        return (<div className="map-item fix-width"/>)
}

export default PApp;