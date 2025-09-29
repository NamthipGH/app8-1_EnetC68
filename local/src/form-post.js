// react/app8-1/local/src/form-post.js

import React from 'react'

export default function FormPost() {
    // 1. State variable for messages/status
    let [msg, setMsg] = React.useState("") 

    // 2. Reference to the HTML form element
    const formRef = React.useRef() 

    const onSubmitForm = (event) => {
        event.preventDefault()

        // FormData.current refers to the actual form element
        const formData = new FormData(formRef.current) 
        const formEnt = Object.fromEntries(formData.entries())

        // 3. API call to the server endpoint
        fetch('/api/form-post', {
            method: 'POST',
            body: JSON.stringify(formEnt),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.text()) // Get the response as text (which is the HTML table)
        .then(result => {
            setMsg(result) // Update state with the HTML result from the server
        })
        .catch(error => {
            console.error('Error:', error)
            setMsg('Submission failed.')
        })
    }

    // This part is not in the slide, but is required for the component to work:
    return (
        <form onSubmit={onSubmitForm} ref={formRef}>
            {/* Form fields (e.g., input for name, email, message) would go here */}
            <button type="submit">Submit</button>
            <div dangerouslySetInnerHTML={{ __html: msg }} />
        </form>
    )
}