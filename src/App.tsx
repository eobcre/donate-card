import Title from './components/Title';
import SelectTab from './components/SelectTab';
import Terms from './components/Terms';
import MonthlyTab from './components/MonthlyTab';

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center bg-[#E4EFFF] h-screen'>
      <div className='bg-white rounded-xl w-[430px] h-[460px]'>
        <Title />
        <SelectTab />
        <MonthlyTab />
        <Terms />
      </div>
    </div>
  );
};

export default App;
