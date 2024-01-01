import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"

function App(){
const [feedback, setFeedback] = useState
(FeedbackData)

  return ( // in the app component you can only insert two or more html elem
  // when u wrap them around either a Div elem or two angle brackets <> OR div
        <>
        <Header />
        <div className="container" > 
        <FeedbackList feedback={feedback}/> 
            </div>
            </>
        )

        }

export default App