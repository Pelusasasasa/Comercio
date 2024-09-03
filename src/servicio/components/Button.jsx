import { Link } from 'react-router-dom'

export const Button = ({text, to, funcion, disabled, type}) => {
  return (
    <button className= {`border border-black bg-gray-200 p-2 font-bold rounded-xl hover:scale-125 ${disabled}`} onClick={funcion} type={type}>
        <Link to={to}>
            {text}
        </Link>
    </button>
  )
}