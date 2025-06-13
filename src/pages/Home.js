import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'


function Home(props) {
  return (
    <div>
        <Nav
      data={props.api}
      />
      <Main
      api={props.api}
      />
    </div>
  )
}

export default Home