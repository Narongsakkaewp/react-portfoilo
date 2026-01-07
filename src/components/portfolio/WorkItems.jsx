import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.img} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>{item.description}</p>
      <p className="work__detail" style={{ fontFamily: 'poppins, "Noto Sans Thai", sans-serif' }}>{item.detail}</p>
      <a href="" className="work__button">
        Read More <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorkItems