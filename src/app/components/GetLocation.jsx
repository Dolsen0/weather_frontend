import { useState, useEffect } from "react";

export default function GetLocation(){
    const [location, setLocation] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://weather-be-ddb897da1e31.herokuapp.com/current/33433')
        .then(res => res.json())
        .then(
            (result) => {
                setLocation(result);
                setLoading(false);
                console.log(result);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        )
    }, []);

    return(
        <>
            {loading ? <p>Loading...</p> : <p>{location.location.name}, {location.location.region}</p>}
            {loading ? <p>Loading...</p> : <p>{location.location.country}</p>}
        </>
    )
}