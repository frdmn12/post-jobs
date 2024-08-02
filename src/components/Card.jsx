
const Card = ({ title, description, icon }) => {
  return (
    <div className="w-80 h-[204px] p-5 bg-gray-2 rounded-lg shadow-lg text-left gap-2 flex-col flex items-start">
      <div className="text-green-1 flex-center">{icon}</div>
      <h1 className="text-white font-medium">{title}</h1>
      <p className="text-gray-1 font-normal">{description}</p>
    </div>
  );
};

export default Card;
