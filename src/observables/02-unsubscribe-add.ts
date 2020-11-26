import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable((subs) => {
  let count: number = 0;
  const interval = setInterval(() => {
    subs.next(count);
    count++;
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs.unsubscribe();
  // subs1.unsubscribe();
  // subs2.unsubscribe();
  console.log("completado time");
  // subs2.unsubscribe();
}, 3000);
