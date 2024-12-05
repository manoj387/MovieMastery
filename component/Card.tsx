import Link from "next/link";
import Backup from "../public/images/backup.png";

interface MovieList {
    movies: any
    id: number,
    title: String,
}


const Card = (movies: MovieList) => {
    const Movies = movies.movies;

    const images = Movies.poster_path ? `https://image.tmdb.org/t/p/original${Movies.poster_path}` : Backup;
    return (
        <>
            <div className="container">
                <div className="card my-2" style={{ width: "18rem" }}>
                    <img src={images as any} className="img-fluid img-thumbnail" alt="NoImages" />
                    <div className="card-body">
                        <h5 className="card-title">{Movies.title}</h5>
                        <div className="d-flex justify-content-between">
                            <Link href={`/movie/${Movies.id}`} className="button-varient">
                                Read More
                            </Link>
                            <p className="my-1 rating shadow-sm">
                                {Movies.vote_average} | {Movies.vote_count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
