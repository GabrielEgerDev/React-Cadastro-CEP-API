import { KeyboardEvent, useContext } from "react";
import { TabDeEnderecoContext } from "../pages/TabDeEnderecoContext";

export default function(){
    const {cidade, setCidade, uf, setUf, cep, setCep} = useContext(TabDeEnderecoContext)

    function encontrarCEP(valor: string){
        const cepRE = /^[0-9]{8}$/
        return cepRE.test(valor)
    }

    const atualizarCEP = async (ev: KeyboardEvent<HTMLInputElement>) => {
        if(ev.currentTarget.value.length != 8) return
        if(!encontrarCEP(ev.currentTarget.value)){
            alert("CEP não foi identificado.")
            return
        }
        ev.preventDefault()
        setCep(ev.currentTarget.value)
        buscarEndereco(ev.currentTarget.value)
    }

    const buscarEndereco = async (cep: string) => {
        const requestEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const endereco = await requestEndereco.json()
        setUf(endereco.uf)
        setCidade(endereco.localidade)
    }

    return<>
        <input type="text" onKeyUp={atualizarCEP} placeholder="Digite o CEP aqui"></input>
    </>
}
