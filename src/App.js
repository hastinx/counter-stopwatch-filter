import Counter from "./components/counter";
import Filter from "./components/filter";
import Stopwatch from "./components/stopwatch";
import Todo from "./components/todo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path='/counter-stopwatch-filter/' element={<Navbar />} />
          <Route path='/counter-stopwatch-filter/counter' element={<Counter />} />
          <Route path='/counter-stopwatch-filter/stopwatch' element={<Stopwatch />} />
          <Route path='/counter-stopwatch-filter/filter' element={<Filter />} />
        </Routes>

      </Router>
      {/* <Stopwatch /> */}
      {/* <Counter /> */}
      {/* <Filter /> */}
    </div>
  );
}

export default App;
