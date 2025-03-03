import "./App.css";
import Form from "./components/Form";
import Graph from "./components/Graph";


function App() {
  return (
    <div className="App">
      <div className="container max-w-full text-center drop-shadow text-gray-100">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded w-full">
          {" "}Expense Tracker{" "}
        </h1>

        {/* grid columns  */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 
        justify-center items-center">
          {/* chart */}
          <Graph/>
          {/* form */}
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
