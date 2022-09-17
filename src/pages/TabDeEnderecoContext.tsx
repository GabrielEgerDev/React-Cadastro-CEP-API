import { createContext, useState, PropsWithChildren } from "react"

interface Endereco {
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>
}

export const TabDeEnderecoContext = createContext({} as Endereco)

export default function TabDeEnderecoContextProvider(props: PropsWithChildren){
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [cep, setCep] = useState("")

    return<>
        <TabDeEnderecoContext.Provider value = {{uf, setUf, cidade, setCidade, cep, setCep}}>
            {props.children}
        </TabDeEnderecoContext.Provider>
    </>
}
