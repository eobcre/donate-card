import { priceData } from '../data/priceData';

const Price: React.FC = () => {
  return (
    <div>
      {priceData.map((data) => (
        <input key={data.id} type='button' value={data.price} />
      ))}
    </div>
  );
};

export default Price;
