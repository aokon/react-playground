import React from 'react'
import Link from 'next/link'

export default (props) => (
    <div key={props.category.id} className="col s12 m6 category-card">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
        <span className="card-title">{props.category.attributes.name}</span>
        <p>
          I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.
        </p>
        </div>
        <div className="card-action">
            <Link href={`/category?id=${props.category.id}`} as={`/category/${props.category.id}`}>Show more</Link>
        </div>
      </div>
    </div>
)