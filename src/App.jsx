import "./App.css";
import BookingComponent from "./components/BookingComponent/BookingComponent";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="b_comp">
        <BookingComponent />
      </div>
    </div>
  );
}

export default App;
