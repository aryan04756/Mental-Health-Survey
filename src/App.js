import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {Routes,Route} from "react-router-dom";
import Disorders from './Disorders';
import MentalHealthSurvey from './form';
import OurTeamPage from './OurTeamPage';
import Feedback from './Feedback';

function App() {
  return (
    <>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Disorders" element={<Disorders/>}/>
      <Route path="Form" element={<MentalHealthSurvey/>}/>
      <Route path="OurTeamPage" element={<OurTeamPage/>}/>
      <Route path="Feedback" element={<Feedback/>}/>
    </Routes>

</>
  );
}

export default App;
