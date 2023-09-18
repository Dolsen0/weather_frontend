import { useState, useEffect } from "react";

export default function GetWeather() {
    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});
    const [condition, setCondition] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://weather-be-ddb897da1e31.herokuapp.com/current/33433')
        .then(res => res.json())
        .then(
            (result) => {
                setLocation(result.location);
                setCurrent(result.current);
                setCondition(result.current.condition);
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        )
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
        <section className="weather">
            <p>{condition.text}</p>
            <p>{current.temp_f}&deg;F</p>
            <img src={`https:${condition.icon}`} alt="Weather Icon" />
            <p>{location.name}</p>
            <p>{current.feelslike_f}&deg;F</p>
        </section>
        </>
    );
}
