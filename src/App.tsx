import Routes from "./routes/Routes";
import Contexts from "./contexts";
import DefaultLayout from "./layouts/Default/Default.layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryService } from "./services/query/query.service";

function App() {
  return (
    <QueryClientProvider client={queryService} contextSharing>
      <Contexts>
        <Routes />
      </Contexts>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
