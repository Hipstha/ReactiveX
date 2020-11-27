import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu auctor nisl. Praesent pulvinar nunc vel porttitor accumsan. Donec accumsan euismod nunc sit amet ultricies. Nulla pulvinar, orci at tincidunt vulputate, mauris neque vestibulum nisi, ac auctor nibh ligula vitae augue. Praesent consectetur eleifend placerat. Nam at feugiat odio. Nulla magna enim, fermentum in tellus lobortis, posuere venenatis nisl. Cras vel odio id justo laoreet cursus. Fusce ultrices, justo eget ornare facilisis, ante nisi tincidunt ex, vitae facilisis nisi augue vel felis. Vestibulum sit amet leo massa. Aenean et lectus elit.
<br>
<br>
Suspendisse facilisis diam in rhoncus aliquet. Etiam ut nulla tempus, commodo sapien vitae, pulvinar odio. In hac habitasse platea dictumst. Aenean at faucibus ex. Aenean at nisl eget nisi tincidunt consectetur eget non elit. Praesent vulputate ipsum vel ex sodales convallis. Aenean quam leo, tristique nec felis nec, sollicitudin scelerisque est. Aenean ullamcorper est ut aliquet egestas. Integer molestie mauris ac lectus fermentum gravida. Cras iaculis tortor et turpis bibendum consequat. Fusce volutpat libero quis aliquet posuere. Suspendisse ultrices volutpat nulla. Pellentesque a viverra ante. Donec molestie ornare nisl id fringilla. Vestibulum non tincidunt lacus. Integer diam quam, elementum eu molestie ut, posuere posuere odio.
<br>
<br>
Proin mollis at nisi eu ultricies. Aliquam venenatis ipsum vel placerat molestie. Aenean turpis ante, accumsan eu orci eu, lobortis convallis est. In et augue nisi. Morbi purus sem, porta pulvinar tortor at, tincidunt posuere elit. Phasellus a rhoncus orci. Mauris risus nisi, dignissim sed arcu in, commodo porttitor lorem. Vivamus ullamcorper turpis eu mauris posuere, laoreet pulvinar quam tempor.
<br>
<br>
Donec auctor gravida cursus. Quisque placerat pharetra gravida. Pellentesque est lorem, imperdiet in ex ut, posuere faucibus mi. Nullam viverra eleifend orci, facilisis ultrices ipsum. Cras laoreet ornare quam, quis convallis risus tempor finibus. Nam sodales nisl magna, a scelerisque lacus efficitur sit amet. Nam sit amet lorem nisi. Vivamus accumsan non quam ac sagittis. Donec eget urna vel lacus interdum porta. Nunc mollis tristique dolor a sollicitudin.
<br>
<br>
Donec maximus ex vel turpis sodales aliquet. Curabitur porta turpis id luctus posuere. Proin nec dolor dictum, aliquam purus non, tristique metus. Donec ultrices ante eu gravida pretium. Quisque interdum finibus hendrerit. Sed fermentum, turpis vitae pretium consectetur, tellus purus ornare risus, a auctor tortor tortor sed mauris. Cras ut risus sit amet lectus congue consequat sed sed ex. Maecenas vitae nibh tincidunt, porttitor velit a, aliquet est. Nunc gravida sollicitudin nisl eget fermentum. Fusce tempor imperdiet odio in vehicula. Aliquam aliquam lacus in purus auctor vehicula. Sed eu condimentum nunc.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");

progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el cálculo

const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams:
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
