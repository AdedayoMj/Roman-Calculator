
import React, { Component } from 'react'
import './App.css'


import Button from './components/Button'
import DeleteButton from './components/DeleteButton'
import RomButton from './components/RomButton'
import Input from './components/Input'
import ClearButton from'./components/ClearButton'
import SubmitButton from'./components/SubmitButton'




export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previousNumber:'',
      currentNumber:'',
      operator:'',
      input:"",
      isValid:false,
      errorMessage: "",
    };

    this.handleNumeral = this.handleNumeral.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  
  handleNumeral(e) {
    let regExp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$|^\d+$/;
    let lowerCase=/^[a-z]+$/g
    
    if (lowerCase.test(e.target.value)===true){
      this.setState({
        isValid: true,
        errorMessage: `${e.target.value} is a lowercase, please enter a uppercase`
      })
    }
    else if ( lowerCase.test(e.target.value)===false && regExp.test(e.target.value) === false){
      this.setState({
        isValid: true,
        errorMessage: `${e.target.value} is not valid Roman Numeral, Please try again`
      })
      
  } else if (lowerCase.test(e.target.value)===false && regExp.test(e.target.value) === true){
    this.setState({
      input: e.target.value,
      errorMessage:""
  })
 
  }
   
  }
 // covert to integer

  
  
  romanToInt=(str)=> {
      var result = 0;
      // the result is now a number, not a string
      var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
      for (var i = 0;i<=decimal.length;i++) {
        while (str.indexOf(roman[i]) === 0){
          result += decimal[i];
          str = str.replace(roman[i],'');
        }
      }
      return result;
    }


 //convert number back to Roman
 toRoman=(num)=> {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (num%decimal[i] < num) {        
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}




  addRoman=()=>{
   
    const previousstate=this.romanToInt(this.state.input);
    this.setState({
      input:"",
      previousNumber:previousstate,
      operator:"plus"
  })
}

  subtractRoman=()=>{
   const previousstate=this.romanToInt(this.state.input);
   this.setState({
    input:"",
    previousNumber:previousstate,
    operator:"subtract"
  })
}

  multiplyRoman=()=>{
    const previousstate=this.romanToInt(this.state.input);
    this.setState({
      input:"",
      previousNumber:previousstate,
      operator:"multiply"
  })
}
 

  equateTotal=()=>{
       const initialstate=this.romanToInt(this.state.input);
       this.state.currentNumber = initialstate;
        if(this.state.operator === 'plus'){
          const  calculate=(parseInt(this.state.previousNumber) +
           parseInt(this.state.currentNumber))
 
           const romanOutput=this.toRoman(calculate)
           
         this.setState({
           input: romanOutput
         })
       }else if (this.state.operator === 'subtract'){
         const  calculate=(parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber))
           if(calculate < 0){
             alert('Negative Roman Not accepted')
           }{
          const romanOutput=this.toRoman(calculate)
          
        this.setState({
          input: romanOutput
        })
       }
       }
       else if (this.state.operator === 'multiply'){
         const  calculate=(parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber))
 
          const romanOutput=this.toRoman(calculate)
          
        this.setState({
          input: romanOutput
        })
       }
      
  }

  addToInputScreen=val=>{
    this.setState({input:this.state.input + val})
      
    }
  
  clearInput=()=>{
      
      this.setState({
        input:"",
      });
    }


  render() {
    const {errorMessage, isValid, input}= this.state
    
    return (
       <div className="App">
        
      <div className="cal-wrapper">
      <h1>ROMAN CALCULATOR (TWO OPTION)</h1>
        <div className="row">
          <Input >
          {input}
          </Input>

        </div>
        

        <div className="row">
          <RomButton handleClick={this.addToInputScreen}>V</RomButton>
          <RomButton handleClick={this.addToInputScreen}>I</RomButton>
          <Button name="plus" id="plus" handleClick={this.addRoman}>+</Button>
        </div>
        <div className="row">
          <RomButton handleClick={this.addToInputScreen}>X</RomButton>
          <RomButton handleClick={this.addToInputScreen}>L</RomButton>
          <Button handleClick={this.subtractRoman}>-</Button>
        </div>
        <div className="row">
          <RomButton handleClick={this.addToInputScreen}>D</RomButton>
          <RomButton handleClick={this.addToInputScreen}>C</RomButton>
          <Button handleClick={this.multiplyRoman}>*</Button>
        </div>
        <div className="row">
          <RomButton handleClick={this.addToInputScreen}>M</RomButton>
          <DeleteButton handleClear={this.clearInput}>DEL</DeleteButton>
          <Button handleClick={this.equateTotal}>=</Button>
        </div>
        
        
        <div className="row">
          <input className="_input" 
          value={input}
          type="text" name="Numeral" 
          id="Numeral"
          onChange={this.handleNumeral}  
          placeholder="Enter Roman Numeral (Uppercase)"
         
          />
         
        </div>
       
      {isValid ? <span id="error"name="error" >{errorMessage}</span>: null}
          
          
        <div className="row ">
          <ClearButton name= "clear"  id='clear' handleClear={this.clearInput}>Clear</ClearButton>
          <SubmitButton name= "submit"  id='submit' handleClick={this.equateTotal}>Submit</SubmitButton>
        </div>
        <br/>
        <div className="hint">
        <div>Hints:</div>
        <div className="row">
          Integer: 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
        </div>
        <div className="row">
         Roman: "M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"
           </div> 
          </div>

      </div>
    </div>
    )
  }
}


