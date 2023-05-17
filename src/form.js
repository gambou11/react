import React from 'react';


const Form = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
