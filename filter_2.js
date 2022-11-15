import React from 'react'

function App() {
    const val=[1,2,3,3,4,5,77,88,999,0]
    const filt=val.filter(n=> n>=40)
    

    return(
      <div>
      {
        filt.map(item=> <li>{item}</li>)
      }
      </div>
    )
}

export default App
