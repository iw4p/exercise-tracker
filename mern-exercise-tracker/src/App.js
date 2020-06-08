import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact compomemt={ExercisesList} />
      <Route path="/edit/:id" exact compomemt={EditExercise} />
      <Route path="/create" exact compomemt={CreateExercise} />
      <Route path="/user" exact compomemt={CreateUser} />
    </Router>
  );
}

export default App;
