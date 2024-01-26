import "./App.css";
import BookingComponent from "./components/BookingComponent/BookingComponent";
import Header from "./components/Header/Header";
import { DataProvider } from "./context/CalenderContext";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <DataProvider>
      <Toaster />
      <div className="app">
        <Header />
        <div className="b_comp">
          <BookingComponent />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
