import React, { useEffect, useState } from 'react'
import Message from './common/Message'
import { scaleAPI } from '../apiCalls'

function Scale() {
    const [feedback, setFeedback] = useState(false)

    // Display Feedback for 5 seconds
    useEffect(() => {
        if (feedback) {
            const timeoutId = setTimeout(() => setFeedback(false), 5000)
            return () => clearTimeout(timeoutId)
        }
    }, [feedback])

    const handleClick = async (event, index) => {
        event.preventDefault()
        const response = await scaleAPI(index)
        if (response) {
            setFeedback(true)
        }
    }

    return (
        <div id="scale" className="mt-3">
            <div className="text-sm font-poppins py-4 rounded text-center bg-neutral-100">
                <p className="text-sm px-3">
                    On a scale of 0-10, how likely are you to recommend{' '}
                    <span className="font-bold text-green-800">
                        Open Source License Compatibility Tracker
                    </span>{' '}
                    to a friend or a colleague?
                </p>
                <div className="px-3 d-grid grid-cols-11 gap-2">
                    {Array.from({ length: 11 }, (_, i) => (
                        <button
                            key={i}
                            type="button"
                            className="p-1 text-white bg-green-500 rounded-md"
                            onclick={(event) => handleClick(event, i)}
                        >
                            {i}
                        </button>
                    ))}
                </div>
            </div>
            {feedback && (
                <Message
                    classes="text-slate-600 font-bold"
                    message="Thank you for your feedback!"
                />
            )}
        </div>
    )
}

export default Scale
