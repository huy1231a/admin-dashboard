import React from 'react'
import Layout from './layout'
import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/right-bar/rightbar'
import Transaction from '../ui/dashboard/transaction/transaction'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
    return (
        <div className='flex gap-5 mt-5'>
            <div className='flex flex-col gap-5' style={{flex: 3}}>
                <div className='flex gap-5 justify-between'>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className='' style={{flex: 1}}>
                <Rightbar />
            </div>
        </div>
    )
}

export default Dashboard