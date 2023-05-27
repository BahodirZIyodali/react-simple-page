import React from 'react'
import "./search.css"
export default function Search() {
  return (
    <div className='Search text-center'>
<h3 className='mb-3'>Looking for anything else?</h3>
<div class="input-group searchInputs mb-3 mx-auto">
  <input type="text" class="form-control" placeholder="Search keyword" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
<div className="tags col-xl-6 col-12 mx-auto px-3">
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">iPhone</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Charger</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Gift</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Google Pixel 3</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Keyboard</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">13 Pro Max</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">iPhone 12</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Laptop</button>
<button className='btn btn-outline-dark btn-rounded m-2' data-mdb-ripple-color="dark">Mobile</button>
</div>
    </div>
  )
}
