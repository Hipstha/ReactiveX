import { Observable, Observer, Subject } from "rxjs";

/* 
  Un subject nos ayuda a pasar los mismos datos a cada una de las subscriptiones
*/

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("intervalo destruido");
  };
});
/*
  1- Casteo múltiple
  2- Es un observer
  3- Se puede manejar next, error y complete
*/

const subject$ = new Subject();
const subs = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe((rnd) => console.log("sub1: ", rnd));
const subs2 = subject$.subscribe((rnd) => console.log("sub2: ", rnd));

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subs.unsubscribe();
}, 3500);

// const subs1 = intervalo$.subscribe((rnd) => console.log("sub1: ", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("sub2: ", rnd));
