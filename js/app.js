let ingresosHTML="";
let totalIngresos=0;
let EgresoHTML="";
let totalEgreso=0;
let presupuesto=0;
let porcentaje=0;
let agregarDato =(event) =>{
  event.preventDefault();
  
  let tipo = document.getElementById("tipo").value;
  let descripcion = document.getElementById("descripcion").value;
  let valor = document.getElementById("valor").value;

  if(descripcion!=""&& valor !==""){
    console.log(" descripcion "+ descripcion);
    console.log(" valor "+ valor);
    if(tipo==="ingreso"){
      cargarIngresos(descripcion, Number(valor));
      document.getElementById("descripcion").value="";
      document.getElementById("valor").value="";
    }else if(tipo==="egreso"){
      cargarEgresoHTML(descripcion, Number(valor));
    }
  }else{
    alert("debe completar todos los campos")
  }
  console.log(tipo);
} 

let cargarIngresos = (descripcion, valor) =>{
  ingresosHTML+=crearIngresosHTML(descripcion, valor);
  totalIngresos+=valor;
  porcentaje = (totalEgreso/totalIngresos*100);
  presupuesto= (totalIngresos-totalEgreso);
  document.getElementById("ingresoTotal").textContent = formatearCLP(totalIngresos);
  document.getElementById("presupuesto").textContent = formatearCLP(presupuesto);
  document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
  document.getElementById("porcentaje").textContent= porcentaje + "%";
}


let crearIngresosHTML=(descripcion, valor)=>{
  return `<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${descripcion}</div>
  <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatearCLP(valor)}</div>
      <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
              <ion-icon name="close-circle-outline"></ion-icon>
          </button>
      </div>
   </div>
</div>`;
}

function formatearCLP(numero) {
  return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
  }).format(numero);
}
let cargarEgresoHTML=(descripcion, Valor)=>{
EgresoHTML +=crearIngresosHTML(descripcion, Valor);
totalEgreso+=Valor;
 porcentaje = (totalEgreso/totalIngresos*100);
 presupuesto= (totalIngresos-totalEgreso);
document.getElementById("egresoTotal").textContent = formatearCLP(totalEgreso);
document.getElementById("presupuesto").textContent = formatearCLP(presupuesto);
document.getElementById("lista-egresos").innerHTML=EgresoHTML;
 document.getElementById("porcentaje").textContent= porcentaje + "%";
}

let CrearEgresoHTML=(descripcion, Valor)=>{
  return `<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${descripcion}</div>
  <div class="derecha limpiarEstilos">
     <div class="elemento_valor">${formatearCLP(valor)}</div>
     <div class="elemento_eliminar">
       <button class="elemento_eliminar--btn">
       <ion-icon name="close-circule-outline"></ion-icon>
       </button>
     </div>
   </div>
 </div>`
}
function formatearCLP(numero) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
}).format(numero);
}