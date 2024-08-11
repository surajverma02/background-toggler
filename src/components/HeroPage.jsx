import { useState } from "react";

function HeroPage() {
  var [color, setColor] = useState("#454545");

  return (
    <div
      style={{ backgroundColor: color }}
      className="pb-5 h-screen w-full flex justify-center items-end"
    >
      <div className="bg-slate-200 h-20 w-1/2 rounded-full flex gap-5 justify-center items-center">
        <button
          onClick={() => setColor("#FFAF00")}
          style={{ backgroundColor: "#FFAF00" }}
          type="button"
          className="rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xl"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("#E3A5C7")}
          style={{ backgroundColor: "#E3A5C7" }}
          type="button"
          className="rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xl"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("#A02334")}
          style={{ backgroundColor: "#A02334" }}
          type="button"
          className="rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xl"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("#A2CA71")}
          style={{ backgroundColor: "#A2CA71" }}
          type="button"
          className="rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xl"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("#5B99C2")}
          style={{ backgroundColor: "#5B99C2" }}
          type="button"
          className="rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xl"
        >
          Button text
        </button>
      </div>
    </div>
  );
}

export default HeroPage;
