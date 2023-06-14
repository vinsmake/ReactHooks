import { useEffect, useState } from "react";

export const useFetch = (url) => {


    const [State, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });


    const getFetch = async () => {
        const anwr = await fetch(url)
        const data = await anwr.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })
    }


    useEffect(() => {
        getFetch();
    }, [url])
    
    


    return {
        data: State.data,
        isLoading: State.isLoading,
        hasError: State.hasError,
    };
}