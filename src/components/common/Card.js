import React from 'react'

const Card = ({ imageSrc, title, price, description, dealUrl }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={imageSrc} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Ksh.{price}</p>
                <p className="card-text">{description}</p>
                <a href={dealUrl} className="btn btn-primary">See More</a>
            </div>
        </div>
    )
}

export default Card
