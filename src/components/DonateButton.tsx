type ButtonProps = {
  name: string;
};

const DonateButton: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className='flex justify-center items-center'>
      <button className='bg-[#5A9CFF] text-white text-sm rounded-md px-6 py-2'>
        {name}
      </button>
    </div>
  );
};

export default DonateButton;
