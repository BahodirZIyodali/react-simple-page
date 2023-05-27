import React from 'react'
import "./signUp.css"
import Image14 from "../../../images/photo14.svg"
export default function SignUp() {
  return (
    <div className='py-xl-5 py-4 px-3 signUp col-xl-8 col-12 mx-auto text-center mt-4'>
        <h3>Never miss a thing</h3>
        <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        <img src={Image14} alt="img" />
        <div class="input-group searchInputs mb-3 mx-auto">
  <input type="text" class="form-control" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-dark" type="button" id="button-addon2">Sign Up</button>
</div>  
    </div>
  )
}
