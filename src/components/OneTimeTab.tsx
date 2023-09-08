import Price from './Price';
import Input from './Input';
import DonateButton from './DonateButton';

const OneTimeTab: React.FC = () => {
  return (
    <div>
      <Price />
      <Input />
      <DonateButton name='Donate One Time' />
    </div>
  );
};

export default OneTimeTab;
