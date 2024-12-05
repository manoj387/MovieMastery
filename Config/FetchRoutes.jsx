"use client"
import { useEffect, useState } from 'react';
import ApiUrl from '@/Config/ApiUrl';
import Navbar from '@/component/Navbar';
import Load from '@/Loader/Load';
import Card from '@/component/Card';
import Footer from '@/component/Footer';



const FetchRoutes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('NowPlaying');

    useEffect(() => {
        document.title = currentRoute;
        handleCurrentState();
    }, [currentRoute])

    const handleCurrentState = async () => {
        if (currentRoute) {
            const apiUrl = await ApiUrl[currentRoute];
            if (apiUrl) {
                setIsLoading(true);
                await fetch(apiUrl).then((res) => res.json()).then((jsonData) => {
                    setData(jsonData.results);
                    setIsLoading(false);
                })
            }
        }
    }
    const handleRoute = (route) => {
        setCurrentRoute(route);
    }
    return (
        <div>
            <Navbar handleClick={handleRoute} />

            <div className='container'>
                {isLoading ? (
                    <Load />
                ) : (
                    <div>
                        <h2 className='text_bg'>{currentRoute.replace('_', ' ').toUpperCase()}</h2>
                        <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                            {data && data.map((movie) => (
                                <Card key={movie.id} movies={movie} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default FetchRoutes
