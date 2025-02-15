import React from "react";

function Card() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#20283E] text-white max-w-[250px] px-2 py-2 rounded-lg">
      <div className="relative flex justify-center max-w-[100%] rounded-lg overflow-hidden">
        <div className="flex absolute left-2 top-2 px-3 py-2 gap-2 bg-zinc-900/90 rounded-md">
          <img className="w-3" src="/star.svg" alt="star" />
          <h4 className="text-[#FFAD49] text-xs">8.7</h4>
        </div>
        <img className="max-w-[100%] object-cover" src="/example-poster.svg" alt="poster" />
      </div>
      <div className="flex justify-between w-full mt-2 py-2 px-1">
        <h2 className="font-medium max-w-[80%] overflow-hidden">Marvel Loki</h2>
        <h3 className="px-2 rounded-lg py-1 text-xs bg-zinc-900">Tv</h3>
      </div>
    </div>
  );
}

export default Card;
