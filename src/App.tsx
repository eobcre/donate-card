import { useState } from 'react';

import Title from './components/Title';
import SelectTab from './components/SelectTab';
import Terms from './components/Terms';
import MonthlyTab from './components/MonthlyTab';
import OneTimeTab from './components/OneTimeTab';

const App: React.FC = () => {
  const [changeTab, setChangeTab] = useState<'Monthly' | 'One Time'>('Monthly');

  const handleClick = (tab: 'Monthly' | 'One Time') => {
    setChangeTab(tab);
  };

  return (
    <div className='flex justify-center items-center bg-[#E4EFFF] h-screen'>
      <div className='bg-white rounded-xl w-[430px] h-[460px]'>
        <Title />
        <SelectTab changeTab={changeTab} handleClick={handleClick} />
        {changeTab === 'Monthly' ? <MonthlyTab /> : <OneTimeTab />}
        <Terms />
      </div>
    </div>
  );
};

export default App;
