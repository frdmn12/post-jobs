const Button = ({ text }) => {
  return (
    <button
      className={`px-5 py-2 border border-[#6DE754] font-semibold text-white hover:bg-green-1 hover:text-black rounded-xl m-1 text-xs md:text-sm `}
    >
      {text}
    </button>
  );
};

export default Button;
