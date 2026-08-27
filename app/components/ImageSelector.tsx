import { useState } from "react";
import { cn } from "~/utils";

export function ImageSelector({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const selected = images[current];

  return (
    <div className="grid max-h-[30rem] grid-cols-[auto_1fr] grid-rows-1 gap-1 rounded border p-1">
      <ul className="flex min-w-28 flex-col items-center gap-1 border-r pr-1">
        {images.map((src, idx) => {
          const name = transformFileName(src);

          return (
            <li key={name} className="w-full">
              <button
                className={cn(
                  "w-full cursor-pointer rounded p-1 text-start capitalize",
                  idx === current
                    ? "bg-blue-500 text-blue-50"
                    : "hover:bg-zinc-700",
                )}
                onClick={() => setCurrent(idx)}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={selected}
          alt={transformFileName(selected)}
          className="max-h-full w-auto"
        />
      </div>
    </div>
  );
}

function transformFileName(name: string): string {
  const [file] = name.split("/").reverse();
  return file.replace(/(-|_)/g, " ").replace(/\.\w+$/, "");
}
