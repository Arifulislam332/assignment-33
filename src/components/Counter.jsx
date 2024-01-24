const Counter = ({ count, setCount }) => {
  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="flex gap-5 mt-5">
        <button
          onClick={handleDecrease}
          className="bg-cyan-500 px-8 py-2 text-white font-bold text-3xl flex justify-center items-center rounded-xl"
        >
          -
        </button>
        <button
          onClick={handleIncrease}
          className="bg-cyan-500 px-8 py-2 text-white font-bold text-3xl flex justify-center items-center rounded-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
