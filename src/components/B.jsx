import E from "./E";

const B = ({ setCount }) => {
  return (
    <div className="bg-orange-400 m-12 p-12">
      B
      <E setCount={setCount} />
    </div>
  );
};

export default B;
