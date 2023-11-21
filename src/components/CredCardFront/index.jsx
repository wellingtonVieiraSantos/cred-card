import p from 'prop-types'

const CredCardFront = ({cardNum, cardName, expDate}) => {
  return (
    <div className="w-full h-full text-slate-200 flex flex-col justify-evenly sm:block">
      <p className='text-3xl text-right p-4 bg-gradient-to-r from-blue-950 via-indigo-600 to-sky-400 inline-block text-transparent bg-clip-text font-bold'>CREDIT CARD</p>
      <div className="h-14 w-full sm:absolute sm:bottom-1/2 sm:translate-y-1/2 text-2xl sm:text-3xl flex justify-center items-center font-BungeeHairline font-bold">
        {cardNum ? 
          <span>{(cardNum + '****************').slice(0, 16).replace(/(\d{4})/g, "$1 ").replace(/\.$/, "")}</span>
          :
          <span>**** **** **** ****</span>
        }
      </div>
      <div className='w-full flex justify-between items-center sm:absolute sm:bottom-5 py-1 px-8 text-xl'>
        {cardName ?
          <input type="text" className="w-2/3 text-center py-1 px-3 bg-transparent" disabled value={cardName.toUpperCase()}/>
          :
          <input type="text" className="w-2/3 text-center py-1 px-3 bg-transparent " disabled value="John Doe S."/>
        }
        <div className='flex flex-col items-center text-lg font-bold'>
          <span className='text-[10px]'>MES/ANO</span>
          {expDate ?
            <span>{expDate.mounth}/{expDate.year.toString().slice(2,4)}</span>
          :
            <span>01/24</span>
          }
        </div>
      </div>
    </div>
  )
}

export default CredCardFront

CredCardFront.propTypes = {
  cardNum: p.string,
  cardName: p.string,
  expDate: p.object
}