const baseUrl = `https://api.themoviedb.org/3/movie`;
export const customkey = process.env.NEXT_PUBLIC_CUSTOM_KEY;

const ApiRoutes = {
  'NowPlaying': `${baseUrl}/now_playing?api_key=${customkey}`,
  'Popular': `${baseUrl}/popular?api_key=${customkey}`,
  'TopRated': `${baseUrl}/top_rated?api_key=${customkey}`,
  'Upcoming': `${baseUrl}/upcoming?api_key=${customkey}`,
  MovieDetails: (id: number) => `${baseUrl}/${id}?api_key=${customkey}`
}

export default ApiRoutes;