import React from "react"

const AddInterview = (props) => {
  return (
    props.steps.map((val, idx)=> {
      let nameId = `name-${idx}`, descriptionId = `description-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={nameId}>{`name #${idx + 1}`}</label>
          <input
            type="text"
            name={nameId}
            data-id={idx}
            id={nameId}
            value={props.steps[idx].name} 
            className="name"
          />
          <label htmlFor={descriptionId}>Description</label>
          <input
            type="text"
            name={descriptionId}
            data-id={idx}
            id={descriptionId}
            value={props.steps[idx].description} 
            className="description"
          />
        </div>
      )
    })
  )
}
export default AddInterview