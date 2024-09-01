import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[] )=> {

       interface FetchResponse {
        
        count: number;
        results: T[];
       
      }
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponse>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {setData(res.data.results), setLoading(false)})
        .catch((err) => { 
            if (err instanceof CanceledError) return ()=> controller.abort();;
            setError(err.message), setLoading(false)});
    },deps?[...deps]: []);

    return{data, error, loading};
  }
export default useData;
