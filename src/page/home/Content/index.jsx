import ForMen from './ForMen'
import NewCollection from './NewCollection'
import React, { useEffect } from 'react'

function Content() {
  const [stateTitle, setStateTitle] = React.useState('NEW COLLECTION')

  return (
    <>
      <NewCollection title={stateTitle} />
      <ForMen />
    </>
  )
}

export default Content
