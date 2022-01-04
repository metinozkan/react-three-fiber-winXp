import React from 'react'

const AppImmageTitle = ({ title, url }) => {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div
      onClick={() => {
        setClicked(!clicked)
        console.log('clicked')
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        filter: clicked && 'drop-shadow(blue 0px 0px)'
      }}>
      <img src={url} style={{ height: 30, width: 30, opacity: clicked ? 0.5 : 1 }}></img>
      <div
        style={{
          width: '100%',
          marginTop: 5,
          display: 'flex',
          justifyContent: 'center',
          fontSize: '10px',
          color: 'white',
          backgroundColor: clicked && 'rgb(11, 97, 255)',
          padding: '0px 3px 2px'
        }}>
        {title}
      </div>
    </div>
  )
}

export default AppImmageTitle
