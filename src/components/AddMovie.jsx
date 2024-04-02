import React from 'react'
import Nav from './Nav'

const AddMovie = () => {
  return (
    <div>
<Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label"><b>MOVIE NAME</b></label>
<input type="text" className="form-control" />
 </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                
<label htmlFor="" className="form-label"><b>MOVIE PHOTO</b></label>
<input type="image" className="form-control" />
 </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label"><b>RELEASE DATE</b></label>
<input type="date" className="form-control" />
</div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label"><b>MOVIE DESCRIPTION</b></label>
<input type="text" className="form-control" />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label"><b>MOVIE GENRE</b></label>
<input type="text" className="form-control" />
</div> 
 
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label"><b>MOVIE LANGUAGE</b></label>
<input type="text" className="form-control" />
</div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label"><b>MOVIE RATING</b></label>
<input type="number" className="form-control" />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label"><b>MOVIE REVIEW</b></label>
<input type="text" className="form-control" />
</div> 
 
<div className="row g-3">
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<button className="btn btn-success"><b>SUBMIT</b></button>
</div>
</div>
            </div>
        </div>
    </div>
</div>









    </div>
  )
}

export default AddMovie