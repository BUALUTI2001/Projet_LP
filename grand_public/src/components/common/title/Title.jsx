import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <>
        <div id='heading'>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    </>
  )
}

export default Title