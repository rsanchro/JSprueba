import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const dni = "49051109K";
console.log(dni);

// MEjor con substring
console.log(dni.substring(0, 9));

let dniNum = "";

// no es la mejor solución ya que tenemos funciones que nos harían la selección
for (let i = 0; i < dni.length - 1; i++) {
  dniNum += dni[i];
}

console.log(dniNum);

const modulo = dniNum % 23;
console.log(modulo);

const tabla = "TRWAGMYFPDXBNJZSQVHLCKE";
const nuevoDni = dniNum + tabla[modulo];

console.log(nuevoDni);
