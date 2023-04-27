import { isEqual } from "lodash"
import { memo } from "react"

//! PASANDO POR PARAMETROS
//! la opcion 2 es envolver todo dentro del metodo memo()
// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`)
//   return (
//     <li>
//       {fullname}
//     </li>
//   )
// })

// //! const MemoLi = memo(Li)   

// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <Li
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }

// PASANDO CHILDREN UTILIZANDO MEMO Y LODASH

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}> 
          {`${x.name} ${x.lastname}`}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
