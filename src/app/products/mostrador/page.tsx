import FaqAccordion from "../../components/FaqAccordion";

export default function MostradorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-6">
      <span className="text-xl mb-2">Productos en el carrito</span>
      <span className="text-7xl font-bold mb-4">22</span>

      <div className="flex my-6">
        <button
          // onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          // onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          -1
        </button>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl mt-10">
        <FaqAccordion />
      </div>
    </div>
  );
}
