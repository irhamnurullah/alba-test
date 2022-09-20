import React from 'react';
import { useState } from 'react';
import { Eye, EyeSlash } from '../../assets/icon/eye';

export function InputPassword({ labelName, props, onChange }) {
  const [isShow, setIsShow] = useState(true);

  const showPassword = () => setIsShow(!isShow);

  return (
    <div className="space-y-1">
      <label>{labelName}</label>
      <div className="relative">
        <input
          {...props}
          onChange={onChange}
          type={isShow ? 'password' : 'text'}
          className="border rounded-md px-4 py-2 focus:outline-primary bg-white placeholder:text-sm"
        />
        <span onClick={showPassword} className="inset-3 left-[85%] absolute w-5 h-5 cursor-pointer">
          {isShow ? <EyeSlash /> : <Eye />}
        </span>
      </div>
    </div>
  );
}

export function Input({ labelName, props }) {
  return (
    <div className="space-y-1">
      <label className="block">{labelName}</label>
      <div className="relative">
        <input
          {...props}
          className="border rounded-md px-4 py-2 focus:outline-primary bg-white placeholder:text-sm"
        />
      </div>
    </div>
  );
}
