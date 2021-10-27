import {createContext,useState} from 'react'


export const AuthContext = createContext(null)

function Context({children}){
    const [email, setEmail] = useState('')
    const [user,setUser]=useState('null')

    
    return(
   <AuthContext.Provider value={{email,setEmail,user,setUser}}>
       {children}
   </AuthContext.Provider>
    )
}

export default Context

