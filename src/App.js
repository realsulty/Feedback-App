import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"

function App(){
const [feedback, setFeedback] = useState
(FeedbackData)
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
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}/> 
            </div>
            </>
        )

        }

export default App