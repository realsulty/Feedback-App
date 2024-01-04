import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')
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


  return (
<Card>
    <form>
        <h2>How Would you rate your Service with us today?</h2>
        <div className="input-group">
            <input type="text"
            onChange={handleTextChange}
            placeholder="Wrtie a review"
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