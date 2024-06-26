import {createContext,useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()  

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text: ' This item is from context',
            rating: 10,
        }
    ])

    const updateFeedback = (id, updItem) => {
       setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

   const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
   }) 
  
 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        }

// Edit an item 
        const editFeedback =(item) => {
            setFeedbackEdit(prev => ({
                item,
                edit:true
            }))
        }
        const resetEditState = () => {
            setFeedbackEdit(prevState => ({
                ...prevState,
                edit: false
            }));
        };
// This is the component values that you can use check now the app.js 
return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    setFeedbackEdit,
    resetEditState,
}}>

    {children}
</FeedbackContext.Provider>
}

export default FeedbackContext