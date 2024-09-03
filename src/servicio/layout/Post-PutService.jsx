export const PostPutService = ({ children, text }) => {

  return (
    <div className='bg-orange-400'>
        <h1 className='text-center font-bold text-2xl pt-2'>{text}</h1>

        {children}
    </div>
  )
}
