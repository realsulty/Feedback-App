import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

// We add props since they are function used in the upper file
// here the handleAdd is passed to the parent file to incoke the function
function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if ( text !== null && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text Must be At Least 10 Characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText('')

        }
    }


  return (
<Card>
    <form onSubmit={handleSubmit}>
        <h2>How Would you rate your Service with us today?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input type="text"
            onChange={handleTextChange}
            placeholder="write a new review"
            value={text}
            />
            <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
    {message && <div className="message">{message}</div>}
    </form>
</Card>
  )
}

export default FeedbackForm