import { useEffect, useState } from "react";
import {
  concatMap,
  delay,
  from,
  fromEvent,
  scan,
  share,
  withLatestFrom,
} from "rxjs";

export const ProgressBar = () => {
  const [progressRatio, setProgressRatio] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const steps = [500, 800, 1100, 1400, 1700];
    const observebaleList = steps.map((num) =>
      from(`The number: ${num}`).pipe(delay(num))
    );

    const clicks$ = fromEvent(document.getElementById("load")!, "click");

    const requests$ = from(observebaleList).pipe(concatMap((obs) => obs));
    const progress$ = clicks$.pipe(concatMap(() => requests$.pipe(share())));

    const count$ = from(observebaleList).pipe(
      scan((current) => {
        // console.log({ current });
        return current + 1;
      }, 0)
    );

    const ratio$ = progress$.pipe(
      scan((current) => {
        // console.log({ current });
        return current + 1;
      }, 0),
      withLatestFrom(count$, (current, count) => current / count),
      share()
    );

    ratio$.subscribe(setProgressRatio);
    ratio$.subscribe((progressRatio) => setIsFinished(progressRatio === 1));

    progress$.subscribe((data) => {
      // console.log({ data });
      setContent(
        (prevContent) => `${prevContent}<div class="content-item">${data}</div>`
      );
    });
  }, []);
  // console.log({ progressRatio });
  return (
    <div>
      <button id="load">Load Data</button>
      <div
        id="progress"
        className={`bg-pink-300 h-9 ${isFinished ? "finished" : ""}`}
        style={{ width: `${progressRatio * 8}%` }}
      ></div>
      <div id="data" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};
