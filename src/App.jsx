import Home from "./pages/Home";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#121829",
        backgroundImage: "url('/img/bg.png')",
        backgroundSize: "100%",
        backgroundPosition: "50% -160px",
        backgroundRepeat: "repeat-y",
        backdropFilter: "blur(24px)",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
