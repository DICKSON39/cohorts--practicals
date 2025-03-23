import React from 'react'

function ProfilePicture() {

    const imageUrl = './src/assets/MyImage.jpg';
    const handlingClick = (e) => e.target.style.display = "none"

  return (
    <img onClick={(e) => handlingClick(e)} src={imageUrl}></img>
  )
}

export default ProfilePicture
