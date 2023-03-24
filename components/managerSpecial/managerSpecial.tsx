import Products from "./products";

export default function ManagerSpecial() {
  return (
    <section className=" flex flex-col justify-center items-center bg-logoColor boxTwo">
      <div className="flex flex-col justify-center items-center font-cinzelFont font-normal py-32 gap-3">
        <h1 className="text-5xl text-green-500">Manager's Special</h1>
        <small className="text-white">{Date()}</small>
      </div>

      <Products />
    </section>
  );
}
