import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

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
        <>
        <Header />
        <div className="container" > 
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}/> 
            </div>
            </>
        )

        }

export default App