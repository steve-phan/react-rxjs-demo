"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { fromEvent, scan } from "rxjs";
import { throttleTime } from "rxjs/internal/operators/throttleTime";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { Observable } from "rxjs/internal/Observable";

const inter = Inter({ subsets: ["latin"] });

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
