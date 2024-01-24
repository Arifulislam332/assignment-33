const Color = ({ color, setColor }) => {
  return (
    <div style={{ color }}>
      <button
        onClick={() => setColor("green")}
        className="text-5xl font-semibold"
      >
        Iam Color Button
      </button>
      <p className="text-3xl">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Color;
