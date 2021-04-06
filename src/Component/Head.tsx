import React from 'react';

interface Props {
  number: Number;
  vsd: string | undefined;
}

const Head: React.FC<Props> = ({ number, vsd }) => {
  return (
    <div>
      <h1>{number}</h1>
      <img src={vsd} alt='this slowpoke moves' width={250} />
    </div>
  );
};

export default Head;
