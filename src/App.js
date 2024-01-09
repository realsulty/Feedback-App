
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIcon from "./components/AboutIcon"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){
// const [feedback, setFeedback] = useState
// (FeedbackData) we are using useContext this replaces useSatate FeedbackContext.js has all the functions
// passed in as values in the provider 


//  this is where you create the function the main one 


  return ( // in the app component you can only insert two or more html elem
  // when u wrap them around either a Div elem or two angle brackets <> OR div
// Now the router has the intial <> brackets 
// Andn ow the inital tag comes at the Provider  is 

        <FeedbackProvider>
        <Router> 
        <Header/>
        <div className="container" > 
        <Route exact path='/'>
        <FeedbackForm/>
        <FeedbackStats />
        <FeedbackList/> 
        </Route>

        <Route path='/about' component={AboutPage} />

            <AboutIcon/>
            </div>
            </Router>
            </FeedbackProvider>
        )

        }

export default App