import React, {useState, useEffect} from 'react'
import './styles.css';
import Nav from './Nav';
import Search from './Search';
import Repositories from './Repositories';
import { getRepositories, createRepository, destroyRepository } from '../../services/api';
import { Link } from "react-router-dom"

const userId = '62c88d9f7020e73990e46ee0'

const MainPage = () =>{
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)

  const loadData = async(query = '') =>{
      try {
        setLoading(true)
        const response = await getRepositories(userId);
        setRepositories(response.data)
        setLoading(false)
      } catch (err) {
       console.error(err);
       setLoadingError(true);
      }
    
  }
  
  useEffect(() => {
    (async () => await loadData())()
    loadData();
  }, [])

  const handleLogout = () =>{
    console.log('Logout')
  }

  const handleSearch = (query) => {
    console.log('query', query)
  }
  const handleDeleteRepo = async (repository) => {
    console.log('deleted', repository)
    await destroyRepository(userId, repository._id)
    await loadData(true);
    
    }

  const handleNewRepo = async (url) => {
    console.log('new repo', url)
    try {
      await createRepository(userId, url)
      await loadData()
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados de repositório.<Link to='/login'>Voltar</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading">
        Carregando...
      </div>
    )
  }
    return (
    <div className="main">
      <Nav onLogout={handleLogout}/>

      <Search onSearch={handleSearch}/>

      <Repositories 
        repositories={repositories} 
        onDeleteRepo={handleDeleteRepo} 
        onNewRepo={handleNewRepo}/>

      

    
      </div>
    
  )
}

export default MainPage;