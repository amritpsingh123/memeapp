import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
function App() {
  var [memeData, setMemeData] = useState([])
  var [memeButton, setmemeButton] = useState(["More!"])
  var [count, setCount] = useState(0)
  useEffect(() => {
    var a = async () => {
      await axios.get("https://api.imgflip.com/get_memes").then(res => setMemeData(res.data.data.memes))
    }
    a()
  }, [])
  let handleChange = () => {
    var a = Math.floor(Math.random() * memeData.length + 1)
    setCount(a);
    setmemeButton(memeButton + "More!")
  }
  return (
    <div className='parent '>
      <div className='centerDiv '>
        <span id='headingh1'>Random MEME Generator😂 </span>
        <span id='ntext'>Meme Number:{count}</span>
        <img src={memeData[count]?.url} alt=""  style={{width:"350px",height:"450px"}} id='image'/> 
        <span id='headingh1'>{memeData[count]?.name}</span> 
        <button type="button" className="btn btn-warning" onClick={handleChange}>{memeButton}</button>
      </div>
      
    </div>
  );
}

export default App;
