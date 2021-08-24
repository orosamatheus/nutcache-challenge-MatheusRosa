import {useState, createContext, useEffect} from 'react';
import { ProviderProps, EmployeeContextProvider } from './types'

import { api } from "../services/api"

const Context = createContext({} as EmployeeContextProvider);

function EmployeeProvider({children}: ProviderProps){

    const [employees, setEmployyes] = useState([])
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [startDate, setStartDate] = useState("");
    const [team, setTeam] = useState("");

    const employee = {
        name : name,
        birth: birth,
        gender: gender,
        email: email,
        cpf: cpf,
        startDate: startDate,
        team: team
    }

    useEffect(() => {
        async function getEmployees(){
            const response = await api.get("/nutemployee")
            setEmployyes(response.data)
        }
        getEmployees()

    }, []);

    async function handleRegistration(e: any){
        e.preventDefault();
        await api.post("/nutemployee", employee);
        return alert("Registrated!")
    }

    async function handleDeleteEmployee(id: string){
        await api.delete(`nutemployee/${id}`)
        return alert("Deleted!")
    }
    



    return(
        <Context.Provider value={{
            setName,
            setBirth,
            setGender,
            setEmail,
            setCpf,
            setStartDate,
            setTeam,
            handleRegistration,
            employees
        }}
        >
        {children}
        </Context.Provider>
    )
}

export {Context, EmployeeProvider} 