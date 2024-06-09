import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 container mx-auto">
        <MainContent />
      </main>
    </>
  );
};

export default App;
