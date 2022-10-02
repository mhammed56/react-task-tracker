import Button from "./Button"


const Header = ({title, onAdd, showAdd}) => {
  

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
      
      color={showAdd ? 'red' : 'blue'}
      text={showAdd ? 'close' : 'Add'}
      onClick={onAdd} />
      
     
     
    </header>
  )

}
Header.defaultProps = {
    title: 'Task shit',
}

export default Header
