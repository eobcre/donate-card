import { priceData } from '../data/priceData';

const Price: React.FC = () => {
  return (
    <div className='flex justify-center items-center gap-2 my-5'>
      {priceData.map((data) => (
        <input
          key={data.id}
          type='button'
          value={`$${data.price}`}
          className='border border-[#BAD1FF] text-sm rounded-md w-[50px] py-1'
        />
      ))}
      <input
        type='button'
        value='Custom'
        className='border border-[#BAD1FF] text-sm rounded-md px-2 py-1'
      />
    </div>
  );
};

export default Price;
