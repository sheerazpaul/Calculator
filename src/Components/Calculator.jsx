import React, { useState, useEffect } from "react";
import Button from "./Button";
export default function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (btn) => {
    if (btn === "C") return setValue("");
    if (btn === "⌫") return setValue((prev) => prev.slice(0, -1));

    if (btn === "=") {
      try {
        setValue((prev) =>
          String(eval(prev.replace(/×/g, "*").replace(/÷/g, "/")))
        );
      } catch {
        setValue("Error");
      }
      return;
    }

    setValue((prev) => prev + btn);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (
        (key >= "0" && key <= "9") ||
        ["+", "-", "*", "/", "."].includes(key)
      ) {
        setValue((prev) => prev + key);
      }

      if (key === "Enter") {
        e.preventDefault();
         try {
        setValue((prev) =>
          String(eval(prev.replace(/×/g, "*").replace(/÷/g, "/")))
        );
      } catch {
        setValue("Error");
      }
    }
      if (key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
      }

      if (key === "Escape") {
        setValue("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl text-black font-semibold text-center mb-3 font-serif">
            Calculator
          </h1>
        </div>
        <div className="w-80 h-[540px] rounded-2xl bg-black shadow-2xl p-4 border ">
          <div className="h-40 flex flex-col justify-end text-right px-2">
            <h1 className="text-5xl font-semibold text-white mt-2 truncate">
              {value || "0"}
            </h1>
            <div className="h-[2px] w-full bg-cyan-600 mt-4 opacity-70" />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4">
            {["C", "÷", "×", "⌫"].map((b) => (
              <Button key={b} label={b} onClick={handleClick} type="func" />
            ))}

            {["7", "8", "9", "-"].map((b) => (
              <Button key={b} label={b} onClick={handleClick} />
            ))}

            {["4", "5", "6", "+"].map((b) => (
              <Button key={b} label={b} onClick={handleClick} />
            ))}

            {["1", "2", "3"].map((b) => (
              <Button key={b} label={b} onClick={handleClick} />
            ))}

            <Button
              label="="
              onClick={handleClick}
              type="equals"
              className="row-span-2 h-full"
            />

            <Button label="0" onClick={handleClick} className="col-span-2" />
            <Button label="." onClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}
