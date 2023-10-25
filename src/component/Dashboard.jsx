import React from 'react'
import "../style/dashboard.css"
import DashboardSideBar from './DashboardSideBar'
const Dashboard = () => {
  return (
      <div className='dashboard-contain'>
          <div className='dashboard-side'>
            <DashboardSideBar/>  
          </div>
          <div className='dashboard-main'></div>
          
    </div>
  )
}

export default Dashboard