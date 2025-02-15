import Card from "@/components/Card";
import React from "react";

function MovieList() {
  return (
    <div className="px-16 py-10 flex justify-start relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="flex flex-wrap gap-6 justify-start m-auto relative z-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default MovieList;
