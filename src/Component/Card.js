import React from 'react'

const Card = ({ item }) => {
    return (
        <div className='border border p-1 shadow rounded text-center ' >
            <h6 className='text-center bg-danger rounded m-4 text-white p-1 ' > {item.name} </h6>
            <h6 className='text-center bg-secondary rounded m-4 text-white p-1 ' > <span  >Volume : </span> {item.volume.value} {item.volume.unit}   </h6>
            <h6 className='text-center text-muted bg-warning rounded m-4 text-white p-1 ' > first brewed : {item.first_brewed} </h6>
            <img src={item.image_url} alt="" className='img-fluid  ' />
            <h6>
            </h6>
        </div>
    )
}

export default Card