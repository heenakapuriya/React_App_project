import React from 'react'
import Dealdata from './DealSection.json'
import DealSection from './DealSection'

const Dealticketlist = () => {
    return (
        <>
            { Dealdata.map((deal) => {
                return (
                    <>
                        <DealSection  voucher_name={deal.voucher_name} discount={deal.discount} ticket_time={deal.ticket_time} />
                    </>
                )
            })}
        </>
    )
}

export default Dealticketlist
