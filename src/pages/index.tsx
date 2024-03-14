import React from "react";
import Card from "@/components/Card";
import { animals } from "@/data/animals";
import Header from "@/components/Header";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Header />
      <div className="flex-wrap justify-center md:flex flex-wrap justify-start lg:flex-wrap justify-start">
        {animals.map((animal, index) => {
          return (
            <div key={index} className="w-1/1 md:w-1/3 lg:w-1/4 p-2">
              <div className="py-2 bg-white rounded-2xl shadow-md overflow-hidden">
                <Card
                  picture_adress={animal.picture_adress}
                  name={animal.name}
                  explanation={animal.explanation}
                  related_url={animal.related_url}
                />
                <div className="mt-4">
                  <Link
                    href={`/animals/${animal.related_url}`}
                    className="text-indigo-500 hover:text-indigo-600 font-medium"
                  >
                    詳細はこちら
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
