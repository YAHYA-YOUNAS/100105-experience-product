import React, { useEffect, useState, useRef } from 'react'
import Input from './Input'
import Button from './Button'
import Result from '../Result'
import Message from './Message'
import Confirmation from './Confirmation'
import {
    checkCompatibility,
    updateUserUsage,
    registerUser,
    getUserDetails,
    redeemCoupon,
} from '../../apiCalls'
import Image from './Image'

function Modal({ userData, setShowModal, handleTryAgainClick }) {
    const [email] = useState(userData.email)
    const [firstSelection] = useState(userData.firstSelection)
    const [secondSelection] = useState(userData.secondSelection)
    const [emailOccurrences] = useState(userData.occurrences)
    const [occurrences, setOccurrences] = useState(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [showCoupon, setShowCoupon] = useState(false)
    const [couponCode, setCouponCode] = useState('')
    const [userDetailsError, setUserDetailsError] = useState('')
    const [couponError, setCouponError] = useState('')
    const hasFetchedData = useRef(false)

    // Register the user if he visits for the first time, and get number of used time
    useEffect(() => {
        const checkOccurrences = async () => {
            if (emailOccurrences === 0) {
                await registerUser(email)
            }
            const userDetails = await getUserDetails(email, emailOccurrences)
            if (userDetails.success) {
                setOccurrences(userDetails.response[0].used_time)
            } else {
                setUserDetailsError(userDetails.message)
            }
        }

        if (hasFetchedData.current === false) {
            // to avoid API call twice
            checkOccurrences()
            hasFetchedData.current = true
        }
    }, [emailOccurrences])

    // Get compatibility results from API
    const getResults = async () => {
        setLoading(true)
        const response = await checkCompatibility(
            firstSelection,
            secondSelection
        )
        setResult(response)
        await updateUserUsage(email, occurrences + 1)
        setLoading(false)
        setShowResult(true)
    }

    const handleCheckClick = (event) => {
        event.preventDefault()
        getResults()
    }

    const handleContributeClick = (event) => {
        event.preventDefault()
        window.open(
            'https://dowellpay.online/contribute-payment/?product_number=UXLIVINGLAB003',
            '_blank'
        )
    }

    const handleYesClick = (event) => {
        event.preventDefault()
        setShowCoupon(true)
    }

    const handleRedeemClick = async (event) => {
        event.preventDefault()
        if (!couponCode) {
            setCouponError('Please enter your coupon code')
        } else {
            setCouponError('')
            setLoading(true)
            const response = await redeemCoupon(email, couponCode)
            if (response.success) {
                await getResults()
                setShowCoupon(false)
            } else {
                setCouponError(response.message)
            }
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-11/12 my-6 pb-2 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-screen overflow-y-auto">
                        <button
                            type="button"
                            className="absolute font-semibold right-8 top-5 text-gray-600"
                            onClick={() => setShowModal(false)}
                        >
                            X
                        </button>
                        <Image
                            classes="w-36 mx-auto"
                            source="./dowell-logo.png"
                            alternateText="User Experience Lab Logo"
                        />
                        <h2 className="text-lg font-semibold text-center border-t border-solid border-blueGray-200 pt-2">
                            Open Source License Compatibility Tracker
                        </h2>

                        {userDetailsError ? (
                            <Message
                                classes="text-red-500 font-bold w-50 mx-auto px-4 m-4"
                                message={userDetailsError}
                            />
                        ) : (
                            <>
                                {(occurrences || occurrences === 0) && (
                                    <Message
                                        classes="w-fit mx-auto my-3"
                                        message={`You have used open source license ${occurrences} times`}
                                    />
                                )}
                            </>
                        )}

                        {showResult ? (
                            <>
                                <Result data={result} email={email} />
                                <div>
                                    <Button
                                        type="button"
                                        classes="bg-green-700 font-normal mx-auto p-2 text-sm"
                                        name="Try Again"
                                        onButtonClick={handleTryAgainClick}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="flex gap-4 items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <Button
                                    type="button"
                                    classes="bg-red-500 px-2 py-1"
                                    name="Cancel"
                                    onButtonClick={() => setShowModal(false)}
                                />

                                {occurrences >= 4 && (
                                    <Button
                                        type="submit"
                                        classes="bg-green-800 px-2 py-1"
                                        name="Contribute"
                                        onButtonClick={handleContributeClick}
                                    />
                                )}

                                {occurrences >= 0 &&
                                    occurrences <= 6 &&
                                    !userDetailsError && (
                                        <Button
                                            type="button"
                                            classes="bg-[#61B84C] px-2 py-1"
                                            name="Check"
                                            showIcon="check"
                                            loading={loading}
                                            onButtonClick={handleCheckClick}
                                        />
                                    )}
                            </div>
                        )}

                        {occurrences >= 4 &&
                            showCoupon === false &&
                            showResult === false && (
                                <div className="border-t border-solid border-blueGray-200">
                                    <Confirmation
                                        message="Do you have a coupon?"
                                        handleYesClick={handleYesClick}
                                    />
                                </div>
                            )}

                        {showCoupon && (
                            <>
                                {couponError && (
                                    <h3 className="text-center text-sm py-2 font-bold text-red-500">
                                        {couponError}
                                    </h3>
                                )}
                                <div className="flex flex-col px-4 pb-3 gap-2 justify-center items-center">
                                    <Input
                                        type="text"
                                        inputValue={couponCode}
                                        name="text"
                                        id="text"
                                        placeholder="Enter your code"
                                        onInputChange={(value) =>
                                            setCouponCode(value)
                                        }
                                    />
                                    <Button
                                        type="button"
                                        classes="bg-[#61B84C] px-2 py-1"
                                        name="Redeem"
                                        loading={loading}
                                        onButtonClick={handleRedeemClick}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal
