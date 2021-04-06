import React from 'react';
import { useState, useEffect } from 'react';
import Head from './Component/Head';
import { Props, TypeDefine } from './Interfsces/Interfaces';

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
        console.log(data.images.fixed_height);
      });
  }, []);

  return (
    <div>
      <h1>
        Hello world from {FirstName} {LastName} {Age}
      </h1>
      <h1>
        <a href={use?.fixed_width_downsampled.url}>link text</a>
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
      <div>
        <Head number={set} vsd={use?.fixed_width_downsampled.url} />
      </div>
    </div>
  );
};

export default TextField;
