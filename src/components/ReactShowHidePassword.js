import React, { useState } from 'react';
// import { ShowHidePasswordModule } from 'ngx-show-hide-password';
// import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai;

const ReactShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(true)
  const togglePassword = () => {
    console.log('something clicked.')
    setShowPassword((open) => !open)
  }
  return (
    <div>
      <input placeholder='password' type={showPassword ? 'password' : 'text'} />
      <button onClick={togglePassword}>{showPassword ? 'show' : 'hide'}</button>
      <input placeholder='Comfirm password' type="password" />
    </div>
  )
}

export default ReactShowHidePassword
