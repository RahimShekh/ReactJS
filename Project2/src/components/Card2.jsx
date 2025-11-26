import React, { useState } from "react";

export default function Card2() {
  const data = [
    {
      name: "Mahiya ve",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit neque vero itaque!",
    },
    {
      name: "Teri Meri",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit neque vero itaque!",
    },
  ];

  const [progress, setProgress] = useState({});

  const handleDownload = (index) => {
    if (progress[index] >= 100) return;

    let value = 0;
    const interval = setInterval(() => {
      value += 1;
      setProgress((prev) => ({ ...prev, [index]: value }));

      if (value === 100) clearInterval(interval);
    }, 30);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center p-5">
      {data.map((elem, index) => (
        <div key={index} className="w-80 px-4 py-3 bg-white shadow rounded-md">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-sm mt-2 text-zinc-600">{elem.description}</p>

          {progress[index] > 0 && progress[index] < 100 && (
            <div className="mt-3 w-full bg-gray-300 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${progress[index]}%` }}
              />
            </div>
          )}

          <button
            onClick={() => handleDownload(index)}
            className="px-3 py-1 bg-blue-500 text-xs font-semibold text-white rounded-md mt-3 w-full text-center"
          >
            {progress[index] >= 100
              ? "Downloaded"
              : progress[index]
              ? `${progress[index]}%`
              : "Download"}
          </button>
        </div>
      ))}
    </div>
  );
}
