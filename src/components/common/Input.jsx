import React, { useState } from "react";

const Input = ({ label, value, setValue, type, id, error }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 capitalize"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:ring-0 focus:outline-none focus:border-primary block w-full p-2.5"
        required
        placeholder=""
      />
      {error && (
        <p className="text-xs text-red-500 mt-1 capitalize">
          title can't be empty
        </p>
      )}
    </div>
  );
};

export default Input;
