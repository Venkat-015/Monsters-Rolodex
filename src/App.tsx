import { useState,useEffect,ChangeEvent} from 'react';
import CardList from'./components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';
import { getData } from './utils/data.utils';
export type Monster={
  id:string;
  name:string;
  email:string;
}

const App =()=>{
  const[searchField,setSearchField]=useState('');
  const [title,setTitle]=useState('');
  const [monsters,setMonsters]=useState<Monster[]>([]);
  const [filteredMonsters,setFilteredMonsters]=useState(monsters);
useEffect(()=>{
  const fetchUsers=async()=>{
    const users=await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
    setMonsters(users);
  }
  fetchUsers();
},[]);
useEffect(()=>{
  const newFilteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
},[monsters,searchField]);
  const onSearchChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    const searchFieldString =event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    };
    const onTitleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
      const searchFieldString =event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString);
      };
  return(
<div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
      className='monsters-search-box' 
      onChangeHandler={onSearchChange} 
      placeholder='Search Monsters'
      /><br />
      <SearchBox 
      className='title-box' 
      onChangeHandler={onTitleChange} 
      placeholder='Enter Your Title'
      />
      <CardList monsters={filteredMonsters}/>
      </div>
  );};
export default App;
