"use client";

import Card from "@/components/Card";
import React, {useEffect, useState} from "react";

// interface Anime {
//     title: string;
//     type: string;
//     score: number;
//     images: {
//       jpg: {
//         image_url: string;
//       };
//     };
//   };

function MovieList() {

    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchAnime = async () => {
            const res = await fetch("https://api.jikan.moe/v4/top/anime");
            const data = await res.json();
            setAnimeList(data.data);
            console.log(data)
        }
        fetchAnime();

    }, [])

  return (
    <div className="px-16 py-10 relative text-white">
        {/* <h1 className="relative z-10 text-center">Hello</h1> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="flex flex-wrap gap-6 justify-start relative max-sm:justify-center z-10">
        {animeList.map((anime) => (
            <Card key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
