import p from 'prop-types'

const Input = ({id, label, handleFunc, handleChangeCard, value, maxlength}) => {
  return (
    <div className='w-full max-w-xl p-1 flex flex-col text-left gap-2'>
      <label htmlFor={id} className='text-xl'>{label}</label>
      <input onChange={handleFunc} onFocus={handleChangeCard} value={value} id={id} maxLength={maxlength} className='py-1 px-4 rounded outline-none text-slate-800 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'/>
    </div>
  )
}

export default Input

Input.propTypes = {
  id: p.string.isRequired,
  label: p.string.isRequired,
  handleFunc: p.func.isRequired,
  handleChangeCard: p.func.isRequired,
  maxlength: p.string,
  value: p.string
}