import Header from "./components/Header"
import InputGroup from "./components/InputGroup"
import { useState } from "react"

function App() {
  let [investmentData, setInvestmentData] = useState({   
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })

  function handleInvestmentDataChange(event, name) {
    /*let name = event.target.name  podia fazer desta forma, mas a logica não esta correta
    name = name.toLowerCase().replace(" ", "")*/
    let value = event.target.value
    setInvestmentData(prevData => {  //atualiza o estado do objeto investmentData
      if(!value){   //se o valor for vazio, o valor é 0
        value = 0
      }
      return {      //retorna o objeto com o valor atualizado a partir do valor anterior
        ...prevData,
        [name]: value
      }
    })
  }

  return (
    <>
      <Header />
      <InputGroup investmentDataHandler={handleInvestmentDataChange}/>
    </>
  )
}

export default App
