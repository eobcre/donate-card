import Price from './Price';
import Input from './Input';
import DonateButton from './DonateButton';

const MonthlyTab: React.FC = () => {
  return (
    <div>
      <Price />
      <Input />
      <DonateButton name='Donate Now' />
    </div>
  );
};

export default MonthlyTab;
