import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const responce = await fetch(url, config);

    if(!responce.ok){
        const resData = await responce.json();
        return resData;
    }else{
        const resData = await responce.json();
        return resData.events;
    }
}

export default function useFetch(url, config, initialData){
    const [ isLoading, setIsLoading ] = useState();
    const [ data, setData ] = useState();
    const [error, setError ] = useState();

    function clearData(){
        setData(initialData);
    }

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);
        try{
            const resData = await sendHttpRequest(url, {...config, body: data});
            setData(resData);
        }catch(error){
            setError(error)
        }
    },[url, config]);

    useEffect(()=>{
        if(config && (config.method === 'GET' || !config.method) || !config){
            sendRequest()
        }
    },[sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }
}