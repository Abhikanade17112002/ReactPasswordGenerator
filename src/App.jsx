import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'
import Container from './components/Container'
import Heading from './components/Heading'
import Input  from './components/Input' ;
import Range  from './components/Range' ;



function App() {
 
 const [ password , setPassword ] = useState("") ;
 const [length , setLength ] = useState(8) ;
 const [ numberallowed , setNumberAllowed ] = useState(false) ;
 const [ characterallowed , setCharacterAllowed ] = useState(false) ;

 const copyGeneratedPassword = useRef() ;


 const passwordGenerator = useCallback(()=>{

  let pass = "" ;
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;

  if( numberallowed){
     str += "0987654321" ;
}
  if( characterallowed ){ str += "!@#$%^&*()_+}{[]|:;?/<>,." ;
 

}


  for( let i = 1 ; i <= length ; i++ )
  {
    let char = Math.floor(Math.random()*str.length + 1 ) ;
    pass += str.charAt(char) ;
  }


  setPassword(pass) ;


 } , [length , numberallowed , characterallowed ,setPassword]) ;


 const copyToClpiBoard = () =>{

  copyGeneratedPassword.current?.select() ;
  window.navigator.clipboard.writeText(password);

 }


 
 useEffect(()=>{
  passwordGenerator();
 } , [length , numberallowed ,characterallowed ,passwordGenerator]) ;
  return (
    <>
      <Container>
        <Heading></Heading>
        <Input copyGeneratedPassword={copyGeneratedPassword} password={password}  copyToClpiBoard={copyToClpiBoard}></Input>
        <Range numberallowed={numberallowed} setNumberAllowed={setNumberAllowed} 
        characterallowed={characterallowed} setCharacterAllowed={setCharacterAllowed}
        
        length={length}setLength={setLength}></Range>
        
        
      </Container>
    </>
  )
}

export default App
