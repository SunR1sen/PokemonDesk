import {useEffect, useState} from "react";
import req from "../utils/request";
import {Endpoints} from "../config";

const useData  = <T, > (endpoint: Endpoints) => {
    const [data, setData] = useState<T | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                await req(endpoint).then((result) => setData(result));
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getPokemons().then();
    }, [endpoint]);

    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;