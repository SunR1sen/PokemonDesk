import {useEffect, useState} from "react";
import req from "../utils/request";
import {Endpoints} from "../config";

const useData  = <T, > (endpoint: Endpoints, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                await req(endpoint, query).then((result) => setData(result));
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getPokemons().then();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint, ...deps]);

    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;