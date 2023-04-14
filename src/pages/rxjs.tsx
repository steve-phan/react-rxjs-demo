import React from "react";
import { ProgressBar } from "../components/ProgresBar/ProgressBar";
import { concatMap, delay, from, of } from "rxjs";

const Rxjs = () => {
  const letters = ["a", "b", "c"];

  const obs$ = of(...letters).pipe(
    concatMap((letter, index) =>
      of(letter).pipe(delay(index === 0 ? 1200 : index * 2000))
    )
  );

  obs$.subscribe(console.log);
  return (
    <div>
      <h1> Rxjs Components</h1>
      <div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Rxjs;
