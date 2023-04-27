import { memo } from "react"

//! Aqui solo funciona con memo si la necesidad de isEqual ya que children es 
//! un string u no un array como en MyList
const Title = ({ children }) => {
  console.log('rendering title')
  return (
    <h1>
      {children}
    </h1>
  )
}

export default memo(Title)
