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

  function handleInvestmentDataChange(event) {
    //podia passsar o name como parametro da funcao e nao precisaria fazer essas manipulacoes
    let name = event.target.name
    name = name.toLowerCase().replace(" ", "")
    let value = event.target.value
    setInvestmentData(() => {
      return {
        ...investmentData,
        [name]: value,
      }
    })
  }

  return (
    <>
      <Header />
      <InputGroup />
    </>
  )
}

export default App
