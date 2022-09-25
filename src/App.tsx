import Routes from "./routes/Routes";
import Contexts from "./contexts";
import DefaultLayout from "./layouts/Default/Default.layout";

function App() {
  return (
    <Contexts>
      <Routes>
        <DefaultLayout />
      </Routes>
    </Contexts>
  );
}

export default App;
