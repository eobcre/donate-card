import { useState } from 'react';

import { priceData } from '../data/priceData';

const Price: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const [selectedCustom, setSelectedCustom] = useState(false);

  const handleClickPrice = (index: number) => {
    setSelected(index);
  };

  const handleClickCustom = () => {
    setSelectedCustom((prevState) => !prevState);
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
            selected === index ? 'bg-[#BAD1FF]' : ''
          }`}
        />
      ))}
      <input
        type='button'
        value='Custom'
        onClick={handleClickCustom}
        className={`price-border w-[70px] ${
          selectedCustom ? 'bg-[#BAD1FF]' : ''
        }`}
      />
    </div>
  );
};

export default Price;
