import { useState } from 'react';

import { priceData } from '../data/priceData';

const Price: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleClickPrice = (index: number) => {
    setSelected(index);
  };

  const handleClickCustom = () => {
    setSelected(null);
  };

  return (
    <div className='flex justify-center items-center gap-2 my-5'>
      {priceData.map((data, index) => (
        <input
          key={data.id}
          type='button'
          value={`$${data.price}`}
          onClick={() => handleClickPrice(index)}
          className={`price-border w-[50px] ${
            selected === index ? 'bg-[#5A9CFF] text-white' : ''
          }`}
        />
      ))}
      <input
        type='button'
        value='Custom'
        onClick={handleClickCustom}
        className={`price-border w-[70px] ${
          selected === null ? 'bg-[#5A9CFF] text-white' : ''
        }`}
      />
    </div>
  );
};

export default Price;
