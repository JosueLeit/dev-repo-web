import React, {useState} from 'react';

const Search = ({onSearch}) => {
  const [query, setQuery] = useState("")
  
  const handleClear = () => {
    setQuery("");
    onSearch("");
  }

  return (
     <div className="search">
        <label htmlFor="query">Buscar</label>
        <input
         type="text" 
         name="query" 
         id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        <button onClick={handleClear}>Limpar</button>
        <button onClick={()=> onSearch(query)}>Buscar</button>
      </div>
  )
}

export default Search;