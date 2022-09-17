import { ChangeEvent, useEffect, useState, useContext } from "react"
import { TabDeEnderecoContext } from "../pages/TabDeEnderecoContext"

export default function () {
    const [cidades, setCidades] = useState([])
    const [buscando, setBuscandoStatus] = useState(true)
    const {uf, cidade, setCidade} = useContext(TabDeEnderecoContext)

    async function buscarCidades() {
        setBuscandoStatus(true)
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setBuscandoStatus(false)
        setCidades(cidades)
        console.log(cidade)
    }

    useEffect(() => {
        buscarCidades()
    }, [uf])

    const selecionarCidade = (ev:ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }

    return <>
        {buscando
            ? <div className="buscandoStatus">Buscando cidades. Aguarde</div>
            : <select
                onChange={selecionarCidade}
                value={cidade}
            >{cidades.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}
