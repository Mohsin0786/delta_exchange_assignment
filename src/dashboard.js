import React from 'react'
import Header from './header'
import './dashboard.css'
import Table from './table'
const Dashboard = () => {
  return (
    <div className="main-container">
    <Header/>
    <div className="filter-section">
        <span>Company(0)</span> 
        <span>Status</span>
    </div>
    <Table/>
    </div>
  )
}

export default Dashboard