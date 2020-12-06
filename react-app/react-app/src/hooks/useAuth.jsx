import react, { useContext, useState } from 'react';


let AuthContext =react.createContext();
export function useAuth(){
    return useContext(AuthContext)
    // let context= useContext(AuthContext)
    // return context;
}

export default function AuthProvider({children}){
    let [user, setuser] = useState({
        name:"ngueyn van tri"
    })

    let value = {
        user
    }
    // console.log(user);
    return (
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>
    )

}