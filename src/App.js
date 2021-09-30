import { Home } from "./components/Home/Home";
import { MediUpdates } from "./components/Home/MediUpdates";
import { Feedback } from "./components/FeedBack/FeedBack";
const App = () => {
  return (
    <div>
      <Home />
      <Feedback/>

      <MediUpdates/>
    </div>
  );
};

export default App;
