import React from 'react';
import { useState, useEffect } from 'react';

interface Props {
  FirstName: String;
  LastName: string;
  Age: Number;
  changePlus: (
    set: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | void;
  changeMinus: (
    set: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | void;
}

// interface LLarge<T> {
//   AgeBefore: T;
// }

// const Large: React.FC<LLarge<Number>> = ({ AgeBefore }) => {
//   return (
//     <div>
//       <h1>{AgeBefore}</h1>
//     </div>
//   );
// };
interface InsideObject {
  height: string;
  url: string;
  size: String;
  widht?: String;
  webp?: URL;
  web_size?: string;
  frame?: String;
  hash?: String;
  mp4?: URL;
  mp4_size?: URL;
}
interface TypeDefine {
  downsized_large: InsideObject;
  fixed_height_small_still: InsideObject;
  original: InsideObject;
  fixed_height_downsampled: InsideObject;
  downsized_still: InsideObject;
  fixed_height_still: InsideObject;
  downsized_medium: InsideObject;
  downsized: InsideObject;
  preview_webp: InsideObject;
  original_mp4: InsideObject;
  fixed_height_small: InsideObject;
  fixed_height: InsideObject;
  downsized_small: InsideObject;
  preview: InsideObject;
  fixed_width_downsampled: InsideObject;
  fixed_width_small_still: InsideObject;
  fixed_width_small: InsideObject;
  original_still: InsideObject;
  fixed_width_still: InsideObject;
  looping: InsideObject;
  fixed_width: InsideObject;
  preview_gif: InsideObject;
  '480w_still': InsideObject;
}
const TextField: React.FC<Props> = ({
  FirstName,
  LastName,
  Age,
  changePlus,
  changeMinus,
}) => {
  const [set, setCount] = useState<number>(0);
  const [use, setUse] = useState<TypeDefine>();

  useEffect(() => {
    fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=mbpoipLoUtYWXHgPcU5EGJ443S7emCRx&tag=&rating=g'
    )
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setUse(data.images);
        console.log(data.images);
      });
  }, [use]);

  return (
    <div>
      <h1>
        Hello world from {FirstName} {LastName} {Age}
      </h1>
      <h1>
        <a href={use?.['480w_still'].url}>link text</a>
      </h1>
      <button
        onClick={() => {
          changePlus(set, setCount);
        }}>
        button++
      </button>
      <h1>{set}</h1>
      <button
        onClick={() => {
          changeMinus(set, setCount);
        }}>
        button--
      </button>
    </div>
  );
};

export default TextField;
