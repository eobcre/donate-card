type TabProps = {
  changeTab: 'Monthly' | 'One Time';
  handleClick: (tab: 'Monthly' | 'One Time') => void;
};

const SelectTab: React.FC<TabProps> = ({ changeTab, handleClick }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex bg-[#5A9CFF] text-white text-sm rounded-md w-[280px] h-[48px]'>
        {/* button Monthly */}
        <div className='flex justify-center items-center'>
          <div className='flex justify-center w-[140px]'>
            <button
              type='button'
              onClick={() => handleClick('Monthly')}
              className={
                changeTab === 'Monthly'
                  ? 'bg-white text-black rounded w-[126px] h-[36px]'
                  : ''
              }
            >
              Monthly
            </button>
          </div>
        </div>

        {/* button One Time */}
        <div className='flex justify-center items-center'>
          <div className='flex justify-center w-[140px]'>
            <button
              type='button'
              onClick={() => handleClick('One Time')}
              className={
                changeTab === 'One Time'
                  ? 'bg-white text-black rounded w-[126px] h-[36px]'
                  : ''
              }
            >
              One Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTab;
