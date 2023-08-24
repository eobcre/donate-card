const SelectTab = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-16 bg-[#5A9CFF] rounded-sm w-[280px] h-[50px]'>
        <input type='button' value='Monthly' />
        <input type='button' value='One Time' />
      </div>
    </div>
  );
};

export default SelectTab;
