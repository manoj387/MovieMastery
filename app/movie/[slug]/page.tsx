"use client"

import ApiRoutes from '@/Config/ApiUrl';
import Load from '@/Loader/Load';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MovieListDetails {
    name: string;
    genres: MovieListDetails[];
    id: number,
    title: string,
    poster_path: string,
    overview: string,
}

const MovieList = () => {
    const params = useParams();
    const param = params.slug as unknown as number;
    const [movies, setMovies] = useState<MovieListDetails[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        handleParams();
    }, [param])

    const handleParams = async () => {
        try {
            if (param) {
                setIsLoading(true);
                const apiUrl = ApiRoutes.MovieDetails(param);
                await fetch(apiUrl).then((res) => res.json()).then((jsonData) => {
                    document.title = jsonData.title;
                    setMovies([jsonData]);
                    setIsLoading(false);
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleReturnBack = () => {
        router.push("/");
    }
    return (
        <>
            <div className="container">
                {isLoading ? (
                    <Load />
                ) : (
                    <div>
                        {Array.isArray(movies) && movies.map((movie: MovieListDetails) => (
                            <div key={movie.id} >
                                <div className='row d-flex flex-row'>
                                    <div className='col-md-6 col-lg-12'>
                                        <h2 className='text_bg  py-1'>{movie.title}</h2>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <Image src='/images/back.svg' className='backImage_style' width={40} height={40}
                                            alt='BackImage' onClick={handleReturnBack} />
                                    </div>

                                </div>

                                <div className='row col-md my-3'>
                                    <div className="card mb-3 mx-auto  shadow-sm" style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-6 my-2">
                                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid rounded-start h-100" alt="BackdropImage" />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <h5 className="card-title">{movie.title}</h5>
                                                    <p className="card-text">{movie.overview}</p>
                                                    {movie && movie.genres.map((genre: MovieListDetails) => (
                                                        <div key={genre.id} className='row'>
                                                            <p className='genre-style'>{genre.name}</p>
                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>
                )}
            </div>
        </>


    )
}

export default MovieList