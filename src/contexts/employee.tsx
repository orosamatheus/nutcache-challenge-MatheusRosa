import {useState, createContext, useEffect} from 'react';
import { ProviderProps, EmployeeContextProvider } from './types'

import { api } from "../services/api"

const Context = createContext({} as EmployeeContextProvider);

function EmployeeProvider({children}: ProviderProps){

    //primary states
    const [employees, setEmployyes] = useState([])
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [startDate, setStartDate] = useState("");
    const [team, setTeam] = useState("");
    const [taggedEmployee, setTaggedEmployee] = useState({
        id: "",
        name : name,
        birth: birth,
        gender: gender,
        email: email,
        cpf: cpf,
        startDate: startDate,
        team: team
    })
    //modal states
    const [registerModal, setRegisterModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);


    const employee = {
        name : name,
        birth: birth,
        gender: gender, 
        email: email,
        cpf: cpf,
        startDate: startDate,
        team: team,
    }
    
    //getting data
    useEffect(() => {
        getEmployees()
    }, []);

    //function to getEmployees from api
    async function getEmployees(){
        const response = await api.get("/nutemployee")
        setEmployyes(response.data)
    }

    //handle employee registration
    async function handleRegistration(e: any){
        e.preventDefault();
        await api.post("/nutemployee", employee);
        alert("Registrated!")

        //close modal after registrated
        setRegisterModal(false);

        getEmployees();

        //cleaning states after registrated
        setName("");
        setBirth("");
        setGender("");
        setEmail("");
        setCpf("");
        setStartDate("");
        setTeam("");
    }

    //function to delete a employee from api
    async function handleDeleteEmployee(id: string){
        await api.delete(`nutemployee/${id}`)
        alert("Deleted!");

        //close modal after deleted
        setDeleteModal(false);
        
        getEmployees();
    }

    //function to get employee by id from api
    async function getEmployeeById(id: string, type: string){

        if(type === "delete") {
            setDeleteModal(true)
        } else {
            setUpdateModal(true);
        }

        const response = await api.get(`/nutemployee/${id}`)

        const employeeById= {
            id: response.data._id,
            name : response.data.name,
            birth: response.data.birth,
            gender: response.data.gender,
            email: response.data.email,
            cpf: response.data.cpf,
            startDate: response.data.startDate,
            team: response.data.team
        }
        setTaggedEmployee(employeeById);
    }

    //function to update a employee from api
    async function handleUpdateEmployee(e: any) {
        e.preventDefault();

        const updatedEmployee = {
            name: name ||taggedEmployee.name,
            birth: birth||taggedEmployee.birth,
            gender: gender||taggedEmployee.gender,
            email: email||taggedEmployee.email,
            cpf: cpf||taggedEmployee.cpf,
            startDate: startDate||taggedEmployee.startDate,
            team: team||taggedEmployee.team,
        }
        await api.put(`/nutemployee/${taggedEmployee.id}`, updatedEmployee)
        
        alert("Updated!")

        //close modal after deleted
        setUpdateModal(false);

        getEmployees();

        //cleaning states after updating
        setName("");
        setBirth("");
        setGender("");
        setEmail("");
        setCpf("");
        setStartDate("");
        setTeam("");
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
            employees,
            registerModal,
            setRegisterModal,
            taggedEmployee,
            handleDeleteEmployee,
            handleUpdateEmployee,
            getEmployeeById,
            updateModal,
            setUpdateModal,
            deleteModal,
            setDeleteModal
        }}
        >
        {children}
        </Context.Provider>
    )
}

export {Context, EmployeeProvider} 