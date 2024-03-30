import ForMen from './ForMen'
import NewCollection from './NewCollection'
import React, { useEffect } from 'react'
import ForWoMen from './ForWomen'
function Content() {
  const [stateTitle, setStateTitle] = React.useState('NEW COLLECTION')
  // useEffect(() => {
  //   console.log('start app')
  // })
  // function pressFuc() {
  //   setStateTitle(1)
  // }
  return (
    <>
      {/* <button onClick={pressFuc}>Click me</button> */}
      <NewCollection title={stateTitle} />
      <ForMen />
      <ForWoMen />
    </>
  )
}

export default Content
