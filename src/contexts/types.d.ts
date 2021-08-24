export interface ProviderProps {
    children: React.ReactElement
}

interface EmployeeProps {
    name : string,
    birth: string,
    gender: string,
    email: string,
    cpf: string,
    startDate: string,
    team: string
}

export interface EmployeeContextProvider{
    setName:React.Dispatch<React.SetStateAction<string>>
    setBirth: React.Dispatch<React.SetStateAction<string>>
    setGender: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setCpf: React.Dispatch<React.SetStateAction<string>>
    setStartDate: React.Dispatch<React.SetStateAction<string>>
    setTeam: React.Dispatch<React.SetStateAction<string>>
    handleRegistration(e:any): Promise<void>;
    employees: EmployeeProps[]
}