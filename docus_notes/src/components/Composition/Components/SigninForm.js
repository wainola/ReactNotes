import React from 'react'
const SigninForm = ({ onChange }) => (
  <div>
    <h4>Formulario</h4>
    <form>
      <input type="text" name="user" id="" placeholder="Enter email" onChange={onChange}/>
    </form>
  </div>
)

export default SigninForm