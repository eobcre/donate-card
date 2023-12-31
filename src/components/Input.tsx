const Input: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col text-sm'>
        <label htmlFor={`name-linked`}>Name</label>
        <input
          type='text'
          id={`name-linked`}
          placeholder='Enter your name'
          className='border border-[#BAD1FF] rounded-md outline-none my-3 p-2 w-[360px]'
        />

        <label htmlFor={`email-linked`}>Email</label>
        <input
          type='text'
          id={`email-linked`}
          placeholder='Enter your email'
          className='border border-[#BAD1FF] outline-none rounded-md my-3 p-2'
        />
      </div>
    </div>
  );
};

export default Input;
