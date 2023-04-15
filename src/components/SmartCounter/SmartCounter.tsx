import React, { useEffect, useState } from "react";
import { fromEvent, interval } from "rxjs";
import { filter, switchMap, takeWhile, tap } from "rxjs/operators";

export const SmartCounter = () => {
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    const inputNum = document.getElementById("range")! as HTMLInputElement;
    /**
     * First, fromEvent(inputNum, "keyup") creates an observable that listens * * to keyup events on the input element with the id "range".
     * Next, using the `pipe` operator to transform this observable.
     * `filter` to filter only event `keyup` with `Enter` keyboard
     */
    const enter$ = fromEvent(inputNum, "keyup").pipe(
      filter((event) => (event as unknown as KeyboardEvent).code === "Enter")
    );

    const counter$ = enter$.pipe(
      switchMap(() => {
        const endRange = parseInt(inputNum.value);
        /**
         * Every 1s `interval(1000) it'll emits a number, then if(number < endRange) `takeWhile` it'll completes the observable sequence and unsubscribed
         */
        return interval(1000).pipe(
          takeWhile((val) => val <= endRange),
          /**
           * `tap` is similar to forEach in vanilla JavaScript in that it *  *  * performs a side effect for each value emitted by the observable,
           *
           * It's important to note that tap does not modify the emitted values * in any way, whereas operators like map and filter do modify the
           * emitted values.
           */
          tap((val) => setActiveNum(val))
        );
      })
    );

    const counterSubscription = counter$.subscribe();

    return () => {
      counterSubscription.unsubscribe();
    };
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
