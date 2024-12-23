import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
const nav = useNavigation()
const isSubmitting = nav.state === 'submitting'

return (
<div>
    <button type="submit" className="btn btn-primary btn-block">
        {isSubmitting ?(
        <>

            <span className="loading loading-spinner"></span> sending...
        </>
        ) : (

        text || 'submit'
        )}
    </button>
</div>
)
}

export default SubmitBtn
