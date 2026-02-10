import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./App.css";
import AppRouter from "./router";
import { logout } from "./services";
import CssBaseline from "@mui/material/CssBaseline";

// async function listCustomers() {
//   const customers = await fetchCustomers();
//   console.log(customers);
// }

function App() {

const handleLogout = () => {
  logout();
}

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   listCustomers();
  // }, []);

  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  )
}

export default App
