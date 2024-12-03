import Header from "./components/Header"
import InputGroup from "./components/InputGroup"
import { useState } from "react"
import ResultsTable from "./components/ResultsTable"

function App() {
  let [investmentData, setInvestmentData] = useState({   
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  })

  function handleInvestmentDataChange(event, name) {
    /*let name = event.target.name  podia fazer desta forma, mas a logica não esta correta
    name = name.toLowerCase().replace(" ", "")*/
    let value = parseFloat(event.target.value)  //converte o valor para float
    setInvestmentData(prevData => {  //atualiza o estado do objeto investmentData
      return {      //retorna o objeto com o valor atualizado a partir do valor anterior
        ...prevData,
        [name]: value
      }
    })
  }

  return (
    <>
      <Header />
      <InputGroup investmentDataHandler={handleInvestmentDataChange} data={investmentData}/>
      {(investmentData.duration >= 1 && Number.isInteger(investmentData.duration))
       ? <ResultsTable investmentData={investmentData}/> 
       : <h2 className="center">Duration must be a positive integer</h2>
      }
    </>
  )
}

export default App
