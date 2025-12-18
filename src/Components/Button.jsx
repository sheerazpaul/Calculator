import React from "react";

function Button({ label, onClick, type = "num", className = "" }) {
  const baseClasses =
    "h-14 rounded-xl flex items-center justify-center text-xl font-medium " +
    "transition-all duration-150 active:scale-95 select-none";

  const typeClasses = {
    num: "text-cyan-300 hover:bg-cyan-950",
    func: "text-cyan-500 hover:bg-cyan-900",
    equals:
      "bg-cyan-500 text-black text-2xl font-bold hover:bg-cyan-400 shadow-lg shadow-cyan-500/30",
  };

  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
    