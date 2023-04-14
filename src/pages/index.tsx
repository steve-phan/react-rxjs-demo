"use client";
import { useEffect, useState } from "react";
import { fromEvent, Observable } from "rxjs";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicking in handleClick", count);
    setCount((preCount) => preCount + 1);
  };

  const myObservable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.add();
  });
  console.log("Synchronous coding ....");
  useEffect(() => {
    const myButton = document.getElementsByTagName("button")[0];

    // myButton.addEventListener("click", handleClick);
    const buttonSubscriber = fromEvent(myButton, "click")
      // .pipe(throttleTime(2000), debounceTime(3000))
      .subscribe(handleClick);
    return () => {
      console.log("remove event listener");
      // myButton.removeEventListener("click", handleClick);
      buttonSubscriber.unsubscribe();
    };
  }, []);

  return (
    <>
      <h1>Hello from Home Page</h1>
      <h4>Current count : {count}</h4>
      <button className="btn-primary"> Click me</button>
    </>
  );
}
