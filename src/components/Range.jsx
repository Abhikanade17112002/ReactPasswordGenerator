import { useState } from "react";


const Range = ({setLength,length ,numberallowed,setNumberAllowed,
    characterallowed,setCharacterAllowed}) =>{
    return <>
    <div className="range">
           <div className="input">
            
            <input type="range" min="8" max="30" onChange={(event)=>{
                 setLength(event.target.value) ;
            }} />
          
           
            <label  for="flexSwitchCheckDefault">Length : {length}</label>
            </div>
           
           
          
           <div className="number">
           <div class="form-check form-switch">
            <input class="form-check-input" onClick={()=>{setNumberAllowed((prev)=>!prev)
            }
        } type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Number</label>
            </div>
            

           </div>
           <div className="character">
           <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
            onClick={()=>{setCharacterAllowed((prev)=>!prev)
                }
            }
            
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">Characters</label>
            </div>
           </div>
    </div>
  
    </>
};


export default Range ;