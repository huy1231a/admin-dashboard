import React from 'react'
import SideBar from '../ui/dashboard/sidebar/SideBar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Footer from '../ui/dashboard/footer/footer'


export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className='flex'>
        <div className='p-5 min-h-screen' style={{flex: 1, backgroundColor: '#182237'}}>
            <SideBar />
        </div>

        <div className='p-5' style={{flex: 4}}>
            <Navbar />
            {children}
            <Footer />
        </div>
      </div>
    )
  }