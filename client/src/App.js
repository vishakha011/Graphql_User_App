import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import "./styles/main.css";
import Dashboard from "./components/Dashboard";
import CreateUser from './components/Users/CreateUser';

function App() {
  return (
    <Router>
      <Route 
        exact path="/" 
        component={Dashboard} 
      />
      <Route 
        exact path="/user/create" 
        component={() => (
        <CreateUser 
          // handleChange={handleChange} 
          // hasDupsUser={hasDupsUser}              
          // clearData={clearData} 
        />
        )}
      />
      {/* <Route 
        exact path="/user/edit/:id" 
        component={() => (<EditUser 
                            handleChange={handleChange} 
                            hasDupsUser={hasDupsUser}
                            clearData={clearData} />)}
      />*/}
    </Router> 
    
  );
}

export default App;
