import { useState, useEffect } from "react";
export default function GetAstronomy() {
    const [astronomy, setAstronomy] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://weather-be-ddb897da1e31.herokuapp.com/astro/33433')
        .then(res => res.json())
        .then(
            (result) => {
                setAstronomy(result.astronomy.astro);
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        )
    }, []);

    if (loading) {
        return <p></p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <section className="astronomy">
            <p>Sunrise: {astronomy.sunrise}</p>
            <p>Sunset: {astronomy.sunset}</p>
            <p>Moonrise: {astronomy.moonrise}</p>
            <p>Moonset: {astronomy.sunset}</p>
            <p>Moon: {astronomy.moon_phase}</p>
        </section>
    );
}
