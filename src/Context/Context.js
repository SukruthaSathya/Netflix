import {createContext,useState} from 'react'


export const AppContext = createContext(null)

function Post({children}){
    const [email, setEmail] = useState('')
    
    return(
   <AppContext.Provider value={{email,setEmail}}>
       {children}
   </AppContext.Provider>
    )
}

export default Post