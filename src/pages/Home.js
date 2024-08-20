import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from './../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
const Home = () => {
  const trending = useSelector(state =>state.movieData.bannerData)
  const {data : nowPlaying}=useFetch("/movie/now_playing")
  const {data : TopRated}=useFetch("/movie/top_rated")
  const {data : PopularShows}=useFetch("/tv/popular")
  const {data : OnAirShows}=useFetch("/tv/on_the_air")
  return (
    <div>
    <BannerHome/>
    <HorizontalScrollCard data={trending} heading={"Trending Movies: What’s Hot Right Now"} trending={true}/>
    <HorizontalScrollCard data={nowPlaying} heading={"On the Big Screen: Now Playing"} media_type={"movie"} />
    <HorizontalScrollCard data={TopRated} heading={"All-Time Greats: Top Rated Films"} media_type={"movie"}/>
    <HorizontalScrollCard data={PopularShows} heading={"Trending : Popular TV Shows"} media_type={"tv"}/>
    <HorizontalScrollCard data={OnAirShows} heading={"Now Streaming: On-Air TV Shows"} media_type={"tv"}/>
    </div>
  )
}

export default Home