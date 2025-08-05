const E = ({ setCount }) => {
  const decrease = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="bg-blue-400 m-12 p-12">
      E <button onClick={decrease}>감소</button>
    </div>
  );
};

export default E;
