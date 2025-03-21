import { FaSpinner } from 'react-icons/fa6';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="h-8 w-8 animate-spin rounded-full  ">
        <FaSpinner className="text-4xl text-[#f5b754]" />
      </div>
    </div>
  );
};

export default Spinner;
