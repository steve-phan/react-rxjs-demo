import { subscribe } from "diagnostics_channel";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { filter, fromEvent, map, pluck } from "rxjs";

export const SmartCounter = () => {
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    const inputNum = document.getElementById("range")!;

    // create enterObservable event
    const enter$ = fromEvent(inputNum, "keyup").pipe(
      filter((event) => (event as unknown as KeyboardEvent).code === "Enter")
    );
    enter$.subscribe((subscribe) => {
      console.log({ subscribe });
    });
  }, []);
  return (
    <div className="container">
      <input
        id="range"
        className="border border-rose-700 border-solid"
        type="number"
      />
      <h1 id="display">{activeNum} </h1>
    </div>
  );
};
