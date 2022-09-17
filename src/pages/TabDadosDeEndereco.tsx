import InputCep from "../components/InputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import TabDeEnderecoContext from "../pages/TabDeEnderecoContext";

export default function() {
    return(
        <TabDeEnderecoContext>
          <div className="title"><h1>Cadastro - dados de endereço</h1></div>
          <InputEstados/>
          <InputCidades/>
          <InputCep/>
        </TabDeEnderecoContext>
    )  
}
