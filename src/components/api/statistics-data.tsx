import useSWR from 'swr'
import {ProvinceMapData} from "../data/provinces";
import {selectedProvinceType} from "react-iran-map/dist/esm/interfaces";

// @ts-ignore
const default_fetcher = (...args: any) => fetch(...args).then(res => res.json())

const serverUrl = 'http://127.0.0.1:5000'

function useMapStatistic() {
    const {data, error, isLoading} = useSWR(serverUrl + `/provinces`, default_fetcher)

    return {
        mapStat: data,
        isLoading,
        isError: error
    }
}

const the_province_fetcher = (url: string, province_name: string | undefined) => {
    if (!province_name)
        return null
    return fetch(`${url}/${province_name}`).then(res => res.json())
}


function useProvinceMapStatistic(provinceName: string | undefined) {

    let url1: string = `${serverUrl}/provinces`
    const {data, error, isLoading} = useSWR([url1, provinceName], ([a, b]) => the_province_fetcher(a, b))

    return {
        provinceMapStat: data,
        isLoadingP: isLoading,
        isErrorP: error
    }
}

export {useMapStatistic, useProvinceMapStatistic}