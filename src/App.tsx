import { Router } from "react-router-dom";
import { Routes } from "./routes";
import { EmployeeProvider } from "./contexts/employee"

import history from './history';
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
    <EmployeeProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </EmployeeProvider>
  );
}

export default App;
