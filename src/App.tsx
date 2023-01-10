import React from 'react'
import '@/app.css'
import smallImg from '@/assets/imgs/1.jpeg'
import bigImg from '@/assets/imgs/2.jpg'
function App() {
  return <>
        <img src={smallImg} alt="小于10kb的图片" />
        <img src={bigImg} alt="大于于10kb的图片" />
        <h2>webpack5-react-ts</h2>
      </>
}
export default App

// import React, { useState } from 'react'

// function App() {
//   const [ count, setCounts ] = useState('')
//   const onChange = (e: any) => {
//     setCounts(e.target.value)
//   }
//   return (
//     <>
//       <h2>webpack5+react+ts1111111111</h2>
//       <p>受控组件</p>
//       <input type="text" value={count} onChange={onChange} />
//       <br />
//       <p>非受控组件</p>
//       <input type="text" />
//     </>
//   )
// }
// export default App