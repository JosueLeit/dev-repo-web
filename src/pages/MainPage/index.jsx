import React from 'react'
import './styles.css';
import Nav from './Nav';
import Search from './Search';
import Repositories from './Repositories';

const MainPage = () =>{
  
  const handleLogout = () =>{
    console.log('Logout')
  }

  const handleSearch = (query) => {
    console.log('query', query)
  }
  const handleDeleteRepo = (repository) => {
    console.log('Deleted repo', repository)
  }
  const handleNewRepo = (url) => {
    console.log('New repo', url)
  }

    return (
    <div className="main">
      <Nav onLogout={handleLogout}/>

      <Search onSearch={handleSearch}/>

      <Repositories 
        repositories={[]} 
        onDeleteRepo={handleDeleteRepo} 
        onNewRepo={handleNewRepo}/>

      

    
      </div>
    
  )
}

export default MainPage;