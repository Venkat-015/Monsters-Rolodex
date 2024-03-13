//import {Component} from 'react';
import { useState,useEffect } from 'react';
import CardList from'./components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

const App =()=>{
  const[searchField,setSearchField]=useState('');
  const [title,setTitle]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilteredMonsters]=useState([monsters]);
  

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>setMonsters(users));
},[]);

useEffect(()=>{
  const newFilteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
},[monsters,searchField]);
  const onSearchChange=(event)=>{console.log(event.target.value);
    console.log(searchField);
    const searchFieldString =event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    };
    const onTitleChange=(event)=>{console.log(event.target.value);
      console.log(searchField);
      const searchFieldString =event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString);
      };

    

  return(
<div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
      <br/><SearchBox className='title-box' onChangeHandler={onTitleChange} placeholder='Enter Your Title'/>
      <CardList monsters={filteredMonsters}/>
      </div>
  )}
/*class App extends Component {
    constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
    };console.log('constructor');
  }
  componentDidMount(){console.log('ComponentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users};
    },
    ()=>{
      console.log(this.State);
    }));
  }
  onSearchChange=(event)=>{console.log(event.target.value);
      const searchField=event.target.value.toLocaleLowerCase();
      
    this.setState(()=>{
      return {searchField};});};
  render()
  {console.log('render');

  const {monsters,searchField}=this.state;
  const {onSearchChange}=this;

  const filteredMonster=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
      });
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex👹</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
       <CardList monsters={filteredMonster}/>
    </div>
  );
}}
*/
export default App;
