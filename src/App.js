import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"

function App(){
const [feedback, setFeedback] = useState
(FeedbackData)

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

}
//  this is where you create the function the main one 
const deleteFeedback = (id) => {
if (window.confirm('Are you sure you want to delete?')) {
    setFeedback(feedback.filter((item) => item.id !== id))
}
}

  return ( // in the app component you can only insert two or more html elem
  // when u wrap them around either a Div elem or two angle brackets <> OR div
// Now the router has the intial <> brackets 
        <Router> 
        <Header/>
        <div className="container" > 
        <Route exact path='/'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}/> 
        </Route>

        <Route path='/about' component={AboutPage} />
            </div>
            </Router>
        )

        }

export default App