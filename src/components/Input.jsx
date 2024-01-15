
import { FaCopy } from "react-icons/fa";


const Input = ({password , copyGeneratedPassword , copyToClpiBoard}) =>{
    return <>
      <div>
            <div class="input-group input-group-lg">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            placeholder="Password"
            readOnly
           ref={copyGeneratedPassword} 
            value={password}
            />
                <span class="input-group-text" id="inputGroup-sizing-lg" onClick={()=>copyToClpiBoard()}><FaCopy /><span>Copy</span></span>
               
        </div>
        
        
      </div>
      
    
    </>
}

export default Input ;