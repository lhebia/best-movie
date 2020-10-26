import { useState, useEffect } from 'react';

// Must be given URL for making API call to trending endpoint
const useApiData = (initialUrl) => {

    const [movieState, setMovieState] = useState([]); 
    const [trendingUrl, setTrendingUrl] = useState(initialUrl);

    // const [hasError, setErrors] = useState(false);

    useEffect(() => {

        async function fetchData() {
            const res = await fetch(trendingUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            const response = await res.json();
            setMovieState(response.results);
            setTrendingUrl(undefined);
        }

        if (trendingUrl) {
          fetchData();
        }

    }, [trendingUrl])

    return [movieState,setTrendingUrl];
}

export default useApiData;