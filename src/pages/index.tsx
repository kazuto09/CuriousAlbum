import React from "react";
import Card from "@/components/Card";
import { animals } from "@/data/animals";

export default function index() {
  return (
    <>
      <header className="top-0 sticky flex flex-auto  bg-blue-500 h-16">
        <div className="flex items-center text-4xl font-bold font-sans text-gray-50">
          <button onClick={() => window.alert("サメなんて観ていない")}>
            <img src="shark.svg" className="h-8 w-8" />
          </button>
          変ないきもの水族館
        </div>
      </header>
      <div className="flex flex-wrap justify-start">
        {animals.map((animal, index) => {
          return (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md overflow-hidden">
                <Card
                  picture_adress={animal.picture_adress}
                  name={animal.name}
                  explanation={animal.explanation}
                  related_url={animal.related_url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
