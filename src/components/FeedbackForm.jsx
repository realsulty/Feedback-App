import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
<Card>
    <form>
        <h2>How Would you rate your Service with us today?</h2>
        <div className="input-group">
            <input type="text"
            onChange={handleTextChange}
            placeholder="Wriffftse a review"
            value={text}
            />
            <Button type="submit">Send</Button>
        </div>
    </form>
</Card>
  )
}

export default FeedbackForm