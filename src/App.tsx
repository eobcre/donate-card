import Title from './components/Title';
import SelectTab from './components/SelectTab';
import Price from './components/Price';
import Input from './components/Input';
import DonateButton from './components/DonateButton';
import Terms from './components/Terms';

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center bg-[#E4EFFF] h-screen'>
      <div className='bg-white rounded-lg w-[340px] h-[420px]'>
        <Title />
        <SelectTab />
        <Price />
        <Input />
        <DonateButton />
        <Terms />
      </div>
    </div>
  );
};

export default App;
