import {IranMap} from 'react-iran-map'
import './layoutmap.css';
import {mapDataType, selectedProvinceType} from "react-iran-map/dist/esm/interfaces";


interface MAppProps {
    theMapData: mapDataType;
    selectedProvince: selectedProvinceType | undefined;
    setSelectedProvince: Function | undefined;

}

function MApp(mdata: MAppProps) {
    console.log("map reload:", mdata)
    let selectedProvince = mdata.selectedProvince

    const selectProvinceHandler = (province: selectedProvinceType) => {
        if (province.name) {
            selectedProvince = province
            if (mdata.setSelectedProvince)
                mdata.setSelectedProvince(selectedProvince)

        }
        console.log("select province:", province.faName, selectedProvince)

    }

    return (
        <div style={{fontFamily: 'vazir'}} className="map-item">
            <IranMap
                data={mdata.theMapData}
                colorRange='30, 70, 181'
                width={600}
                textColor='#000'
                defaultSelectedProvince=''
                deactiveProvinceColor='#eee'
                selectedProvinceColor='#3bcc6d'
                tooltipTitle='تعداد:'
                selectProvinceHandler={selectProvinceHandler}
            />
        </div>
    )
}

export default MApp