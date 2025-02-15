import React from "react";

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

function Card({anime}: {anime: any}) {

    console.log(anime.images.jpg.large_image_url);
  return (
    <div className="flex flex-col items-center justify-center bg-[#20283E] text-white max-w-[250px] px-2 py-2 rounded-lg">
      <div className="relative flex justify-center max-w-[100%] min-h-[370px] bg-red-500 rounded-lg overflow-hidden">
        <div className="flex absolute left-2 top-2 px-3 py-2 gap-2 bg-zinc-900/90 rounded-md">
          <img className="w-3" src="/star.svg" alt="star" />
          <h4 className="text-[#FFAD49] text-xs">{anime.score}</h4>
        </div>
        <img className="min-w-[100%] min-h-[100%] object-fill" src={anime.images.jpg.large_image_url} alt="poster" />
      </div>
      <div className="flex justify-between w-full mt-2 py-2 px-1">
        <h2 className="font-medium max-w-[80%] h-6 overflow-hidden">{anime.title}</h2>
        <h3 className="px-2 rounded-lg py-1 text-xs bg-zinc-900"> {anime.type == "TV Special"  ? "Tv" : anime.type} </h3>
      </div>
    </div>
  );
}

export default Card;
