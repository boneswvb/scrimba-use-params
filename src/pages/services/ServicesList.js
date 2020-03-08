import React from "react"
import servicesData from './servicesData'
import {Link} from 'react-router-dom'

function ServicesList() {
	const services = servicesData.map(data => {
		return (
			<h3 key={data._id}><Link to={`/services/${data._id}`}>{data.name}</Link> - R{data.price}</h3>
		)
	})
	
  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  )
}

export default ServicesList