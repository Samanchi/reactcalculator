import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Button from "./Components/Button"
import Input from "./Components/Input"

const App=()=> { 
  const [text,setText]=useState('') ;
  const [result,setResult]=useState('') ;
  
  function addToText(val){
    setText((text)=>[...text,...val]); 
  }

  const calculateResult= () => {
    const input=text.join("")    
    setResult(evaluate(input));
  }

  const resetInput=()=>{
    setText("");
    setResult("");

  }
  const buttonColor='#f2a33c';
  return (
    <div className='App'>
      
      <div className='calc-wrapper'>
      <h1 className='calc'>Kishore's Calculator</h1>  
        <Input  text={text} result={result}/>
        <Button symbol={'clear'} color='red' handleClick={resetInput}/>  
        <div className='row'>
        <Button symbol={'7'} handleClick={addToText}/>
        <Button symbol={'8'} handleClick={addToText}/>
        <Button symbol={'9'} handleClick={addToText}/>
        <Button symbol={'/'} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={'4'} handleClick={addToText}/>
        <Button symbol={'5'} handleClick={addToText}/>
        <Button symbol={'6'} handleClick={addToText}/>
        <Button symbol={'*'} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={'1'} handleClick={addToText}/>
        <Button symbol={'2'} handleClick={addToText}/>
        <Button symbol={'3'} handleClick={addToText}/>
        <Button symbol={'+'} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={'0'} handleClick={addToText}/>
        <Button symbol={'.'} handleClick={addToText}/>
        <Button symbol={'='} handleClick={calculateResult}/>
        <Button symbol={'-'} color={buttonColor} handleClick={addToText}/>
        </div>
        
      </div>

    </div>
);
}

export default App;
