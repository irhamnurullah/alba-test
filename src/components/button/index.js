import React from 'react';

export default function Button({ children, props, onClick }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className="text-white bg-primary hover:shadow-lg hover:shadow-primary duration-200  focus:outline-gray-400  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
    >
      {children}
    </button>
  );
}
