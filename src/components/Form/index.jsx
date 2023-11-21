import CredCardFront from "../CredCardFront"
import CredCardBack from "../CredCardBack"
import Input from "./Input"
import { useEffect, useState } from "react"

const Form = () => {

  const ano = new Date().getFullYear()
  const mes = new Date().getMonth()

  const [isFrontCard, setIsFrontCard] = useState(true)
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [expDate, setExpDate] = useState({mounth: mes+1, year: ano})
  const [cvv, setCvv] = useState('')
  const [yearExpirate, setYearExpirate] = useState([])
  
  useEffect(()=>{

    const array = []
    for(let i = ano; i <= ano+10; i++){
      array.push(i)
    }
    setYearExpirate(array)

  },[ano])

  const handleCardNum = (e) => {
    const num = e.target.value.replace(/\D/g, '')
    setCardNum(num)
  }

  const handleExpDateMounth = (e) =>{
    setExpDate(prev=> ({...prev,mounth: e.target.value}))
  }
  const handleExpDateYear = (e) =>{
    setExpDate(prev=> ({...prev,year: e.target.value}))
  }

  const handleCodSec = (e) => {
    const num = e.target.value.replace(/\D/g, '')
    setCvv(num)
  }
 
  return (
    <form className="max-w-5xl w-full min-h-[400px] h-screen sm:h-2/3 m-auto flex flex-col justify-center items-center p-2 gap-4 rounded border relative font-roboto">
      <div className=" w-full mobile:w-[400px] h-[200px] mobile:h-[250px] flex m-2 bg-gradient-to-t from-blue-900 via-blue-400 to-sky-200 rounded sm:absolute sm:-top-[130px] border">
        {isFrontCard ?
          <CredCardFront cardNum={cardNum} cardName={cardName} expDate={expDate}/>
        :
          <CredCardBack cvv={cvv}/>
        }
      </div>

      <Input id='card-name' label='Nome no cartão' autocomplete='false' value={cardName} handleChangeCard={()=>setIsFrontCard(true)} handleFunc={(e)=>setCardName(e.target.value)}/>
      <Input id='card-number' label='Número do cartão' maxlength='16' autocomplete='false' value={cardNum} handleChangeCard={()=>setIsFrontCard(true)}  handleFunc={(e)=>handleCardNum(e)}/>
      <div className="w-full max-w-xl flex flex-col sm:flex-row p-1 gap-4 items-center">
        <div className="flex flex-col gap-3 w-full sm:w-1/2 py-2 text-left border p-2 rounded border-slate-500">
          <span className="text-xl">Validade do cartão</span>
          <div className="flex gap-4 sm:justify-between">
            <label htmlFor="mounth">mês</label>
            <select id="mounth" className="text-slate-800 rounded py-1 px-3 outline-none" onChange={handleExpDateMounth} onClick={()=>setIsFrontCard(true)}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <label htmlFor="year">ano</label>
            <select id="year" className="text-slate-800 rounded py-1 px-3 outline-none" onChange={handleExpDateYear} onClick={()=>setIsFrontCard(true)}>
              {yearExpirate.map(year=>(
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-1/2 py-2 text-left">
          <Input id='cvv' label='Código de segurança (CVV)' maxlength='3' autocomplete='false' value={cvv} handleChangeCard={()=>setIsFrontCard(false)} handleFunc={(e)=>handleCodSec(e)}/>
        </div>
      </div>
    </form>
  )
}

export default Form