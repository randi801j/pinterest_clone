import React from 'react';
import './App.css';
import Header from "./components/Header";
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash';

function App() {
  const[pins,setNewPins]= useState([])
// create a function to grab images from Unsplash

  const getImages =(term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params: {
        query:term}
      });
  }


  const onSearchSubmit = (term)=>{
    console.log("on search",term)
    getImages(term).then((res)=>{
      let result =res.data.results;
      let newPins=[
        ...results,
        ...pins,
      ]
      newPins.sort(funtion(a,b){
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  }

  onSearchSubmit("bananas");

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard/>
    </div>
  );
}

export default App;
