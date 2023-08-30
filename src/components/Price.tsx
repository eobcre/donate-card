import { useState } from 'react';

import { priceData } from '../data/priceData';

const Price: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number | null) => {
    setSelected(index);
  };

  return (
    <div className='flex justify-center items-center gap-2 my-5'>
      {priceData.map((data, index) => (
        <input
          key={data.id}
          type='button'
          value={`$${data.price}`}
          onClick={() => handleClick(index)}
          className={`border border-[#BAD1FF] text-sm rounded-md w-[50px] py-1 ${
            selected === index ? 'bg-[#BAD1FF]' : ''
          }`}
        />
      ))}
      <input
        type='button'
        value='Custom'
        onClick={() => handleClick(null)}
        className={`border border-[#BAD1FF] text-sm rounded-md w-[70px] py-1 ${
          selected === null ? 'bg-[#BAD1FF]' : ''
        }`}
      />
    </div>
  );
};

export default Price;
