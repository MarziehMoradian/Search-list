import React, { useState } from 'react';
import NamesList from './component/Names';
import PEOPLE from './data'
import './App.css';
import Search from './component/SearchList';
import ClearList from './component/Clear';

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

  const handleClearInput = () =>{
    setSearch('')
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} search={search}/>
      <NamesList datas={PEOPLE} search={search}/>
      {search && <ClearList content='Clear List' onClick={handleClearInput}/>}
    </div>
  );
}

export default App;
