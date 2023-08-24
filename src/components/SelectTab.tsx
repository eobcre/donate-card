const SelectTab = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-16 bg-[#5A9CFF] text-white text-sm rounded-md w-[280px] h-[48px]'>
        <input type='button' value='Monthly' />
        <input type='button' value='One Time' />
      </div>
    </div>
  );
};

export default SelectTab;
