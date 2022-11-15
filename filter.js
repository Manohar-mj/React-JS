import React from 'react'

function App() {
    const names=["mj","mb","mm","ab","pp"]
    const filt=names.filter(name=>name.includes('m'))
    

    return(
      <div>
      {
        filt.map(item=> <li>{item}</li>)
      }
      </div>
    )
}

export default App
