import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente[obs]: ", value),
  error: (error) => console.warn("Error [obs]: ", error),
  complete: () => console.info("completado [obs]"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola mundo");
  subs.next("adios mundo");

  subs.next("Hola mundo");
  subs.next("adios mundo");

  // Forzar un error
  // const a = undefined;
  // a.nombre = "fernando";

  subs.complete();

  subs.next("Hola mundo");
  subs.next("adios mundo");
});

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.info("Completado")
// );

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.info("Completado")
// );
