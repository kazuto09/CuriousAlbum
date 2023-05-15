import React from "react";
import { card } from "@/types/Card";

export default function Card(props: card) {
  const { picture_adress, name, explanation, related_url } = props;
  return (
    <>
      <img
        className="w-full h-64 object-cover object-center"
        src={picture_adress}
        alt="Card Image"
      />
      <h2 className="text-lg font-medium text-gray-900">{name}</h2>
      <details>
        <summary>説明</summary>
        <p className="mt-2 text-gray-600">{explanation}</p>
      </details>
      <div className="mt-4">
        <a
          href={related_url}
          className="text-indigo-500 hover:text-indigo-600 font-medium"
        >
          にゅーこんてんつはしばしまたれし
        </a>
      </div>
    </>
  );
}
