import p from 'prop-types'

const CredCardBack = ({cvv}) => {
  return (
    <div className="w-full h-full text-slate-800 flex flex-col justify-evenly sm:block">
      <div className='w-full h-14 sm:mt-6 bg-slate-900'></div>
      <div className='w-2/3 h-5 sm:h-10 sm:mt-14 ml-8 bg-slate-100 flex items-center justify-end p-4'>
        {cvv ? 
          <span>{(cvv + '***').slice(0, 3)}</span>
        :
          <span>***</span>
        }
      </div>
    </div>
  )
}

export default CredCardBack

CredCardBack.propTypes = {
  cvv: p.string
}