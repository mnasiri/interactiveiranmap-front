import {IranProvincesMap} from "react-iran-provinces-map";
import './layoutmap.css';
import {ProvinceMapData} from "react-iran-provinces-map/dist/esm/interfaces"
import {selectedCityType} from "react-iran-provinces-map/dist/cjs/interfaces";
import {mapDataType, selectedProvinceType} from "react-iran-map/dist/esm/interfaces";


interface PMAppProps {
    // thePMapData: ProvinceMapData
    curMapData: mapDataType
    selectedProvince: selectedProvinceType | undefined
}


function PApp(defaultData: PMAppProps) {
    console.log(defaultData)
    let selectedProvince: selectedProvinceType | undefined = defaultData.selectedProvince;
    let selectedCity: string | undefined = undefined
    let curData: any = defaultData.curMapData
    // if (selectedProvince?.name)
    //     curData = defaultData.thePMapData[selectedProvince.name]

    const selectProvinceHandler = (city: selectedCityType) => {
        selectedCity = city.name
        console.log(selectedCity, city.faName)

    };
    {/*"30, 70, 181"*/}

    if (selectedProvince?.name)
        return (
            <div style={{fontFamily: "vazir"}} className="map-item">
                <h1 className="province-header">{selectedProvince.faName}</h1>
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
    else
        return (<div/>)
}

export default PApp;