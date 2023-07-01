import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";



const Card = ({ img }) => (
  <div className="card w-52 h-60 m-1 cursor-pointer transition-transform duration-500 transform hover:-translate-y-10">
    <Link to="video">
      <img
        className="w-full h-full"
        src={img}
        alt="cover"
      />
    </Link>
  </div>
);



const Row = ({ title, arr = [] }) => {
  return (
    <div className="bg-black">
      <h2 className="text-white font-bold text-3xl pt-5">{title}</h2>
      <div className="flex gap-5 mt-2 px-5">
        <div className="scroll-container flex">
          {arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home1 = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <section className="home">
      <div
        className="bg-cover bg-no-repeat h-[600px] pl-5 bg-black relative"
        style={{
          backgroundImage: popularMovies[1]
            ? `url(${`${imgUrl}/${popularMovies[1].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        <div className="w-[600px] flex flex-col gap-3 pl-10 justify-center py-40 absolute">
          {popularMovies[1] && (
            <h1 className="text-white font-extrabold text-6xl">
              {popularMovies[1].original_title}
            </h1>
          )}
          {popularMovies[1] && (
            <p className="text-white text-xl">{popularMovies[1].overview}</p>
          )}

          <div className="flex gap-3">
          <Link to='video'> <button className="bg-gray-800 px-9 py-1 text-white opacity-70">
              Play
            </button></Link>
        <button className="bg-gray-800 px-9 py-1 text-white opacity-70">
              My List
            </button>
          </div>
        </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  );
};

export default Home1;
