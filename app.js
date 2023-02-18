window.addEventListener("load", () => {
//------------------BOTONES---------------//
const burgerMenu = document.getElementById('navbar-burger');
const navbarMenu = document.getElementById('navbar-menu');
const btnBalance = document.getElementById('btn-balance');
const btnCategorias = document.getElementById('btn-categorias');
const btnReportes = document.getElementById('btn-reportes');


const pagBalance = document.getElementById('pag-balance');
const balanceGanancias = document.getElementById('balance-ganancias');
const balanceGastos = document.getElementById('balance-gastos');
const balanceTotal = document.getElementById('balance-total');

//FILTROS
const btnOcultarFiltro = document.getElementById('btn-ocultar-filtro');
const filtroTipo = document.getElementById('filtro-tipo');
const filtroCategoria = document.getElementById('filtro-categoria'); 
const filtroOrdenar = document.getElementById('filtro-ordenar'); 
const btnNuevaOperac = document.getElementById('btn-nueva-operac');
//SIN OPERACIONES
const verSinOperac = document.getElementById('ver-sin-operac'); 
//TABLA OPERACIONES
const tablaOperaciones = document.getElementById('tabla-operaciones'); 
const escribirOperacion = document.getElementById('escribir-operacion');
//NUEVA OPERACION
const pagNuevaOperac = document.getElementById('pag-nueva-operac');

const categoriaOperacionSelect = document.getElementById('categoria-operacion-select');
 
const btnCancelar = document.getElementById('btn-cancelar'); 
const btnAgregar = document.getElementById('btn-agregar');

//Inputs 
const inputDescripcion = document.getElementById('input-descripcion');
const inputMonto = document.getElementById('input-monto');
const inputTipo = document.getElementById('input-tipo')
const inputFecha = document.getElementById('input-fecha');

//----------------EDITAR OPERACIONES

const paginaEditarOperac = document.getElementById('pagina-editar-operac'); 
const inputEditarDescripcion = document.getElementById('input-editar-descripcion');
const inputEditarMonto = document.getElementById('input-editar-monto'); 
const inputEditarTipo = document.getElementById('input-editar-tipo');
const inputEditarFecha = document.getElementById('input-editar-fecha');
const categoriaOperacEditarSelect = document.getElementById('categoria-operac-editar-select');

const btnCancelarEditar = document.getElementById('btn-cancelar-editar');
const btnEditarEditar = document.getElementById('btn-editar-editar');

//-----------------------------CATEGORIAS----------------------------------


const paginacateg = document.getElementById('pagina-categ'); 
const agregarCategoriaBoton = document.getElementById('agregar-categoria-boton');
const listaCategorias = document.getElementById('lista-categorias');


//-------------------Reportes

const paginaReportes = document.getElementById('pagina-reportes'); 

//-----------------Seccion sin los reportes

const sinReportes = document.getElementById('sin-reportes');

//----------------Seccion con reportes

const conReportes = document.getElementById('con-reportes'); 
const reporteResumen = document.getElementById('reporte-resumen');

const reporteTotalCategorias = document.getElementById('reporte-total-categorias'); 
const reporteTotalMes = document.getElementById('reporte-total-mes');

const editarCategoria = document.getElementById('editar-categoria');
const inputEditarCategoria = document.getElementById('input-editar-categoria');
const btnCancelEditCategory = document.getElementById('btn-cancel-edit-category');
const btnEditEditCategory = document.getElementById('btn-edit-edit-category');
const listadoReportes = document.getElementById('listado-reportes');
const filtroFecha = document.getElementById('filtro-fecha')

// ---------Boton Balance
btnBalance.addEventListener('click',() =>{
    pagBalance.style.display = 'block'
    paginacateg.style.display = 'none'
    paginaReportes.style.display = 'none'
    pagNuevaOperac.style.display = 'none'
    paginaEditarOperac.style.display = 'none'
    editarCategoria.style.display = 'none'
})

//------------Boton Categorias
btnCategorias.addEventListener('click', () =>{
    pagBalance.style.display = 'none'
    paginacateg.style.display = 'block'
    paginaReportes.style.display = 'none'
    pagNuevaOperac.style.display = 'none'
    paginaEditarOperac.style.display = 'none'
    editarCategoria.style.display = 'none'
})
///----------------Reportes
btnReportes.addEventListener('click', () =>{
    pagBalance.style.display = 'none'
    paginacateg.style.display = 'none'
    paginaReportes.style.display = 'block'
    pagNuevaOperac.style.display = 'none'
    paginaEditarOperac.style.display = 'none'
    editarCategoria.style.display = 'none'
})

btnNuevaOperac.addEventListener('click', () => {
    pagBalance.style.display = 'none'
    pagNuevaOperac.style.display = 'block'
})

btnCancelarEditar.addEventListener('click', () =>{
    pagBalance.style.display = 'block'
    paginaEditarOperac.style.dislpay = 'none'
})

//-----Input Fecha
const date = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day :day}`;
};

inputFecha.value = date();
inputEditarFecha.value = inputFecha.value;
filtroFecha.value = inputFecha.value;

// --------------------------OPERACIONES------------------------------
// funcion para generar id con metodo math para despues usarlo cuando agregue la funcion de pintar operacion
const generateId = () => {
    let p1 = Math.floor(Math.random() * 0x10000);
    let p2 = new Date().getTime();
    return `${p1}${p2}`;
};
 //----------------------------Nueva Operacion------------------
 //Vor a crear las catergorias asignandole un id relacionado al nombre q se predefinio
let categories = [
    { id: 0, name: "Servicios"},
    { id: 1, name: "Transporte"},
    { id: 2, name: "Educacion"},
    { id: 3, name: "Trabajo"},
    { id: 4, name: "Comida"},
];

const reseteoForm = () =>{
    inputDescripcion.value = "";
    inputMonto.value = 0;
    inputTipo.value = "gasto";
    categoriaOperacionSelect.value = categories [0];
    inputFecha.value = date();
};

const SinoHayOcultarOpe = (operaciones) =>{
    if (operaciones === 0){ // si no hay operaciones oculto la tabla para q se vea la imagen
        tablaOperaciones.style.display = 'none';
        verSinOperac.style.display = 'block';
    } else{ // si se agragaron q se vea la tabla
        tablaOperaciones.style.display = 'block';
        verSinOperac.style.display = 'none';
    }
};

//--------Agregar operaciones

let operaciones = [];
let balance = [];

btnAgregar.addEventListener('click', () => {
    const pintarOperacion = {
        id: generateId(),
        descripcion: inputDescripcion.value,
        monto: inputMonto.value,
        tipo: inputTipo.value,
        categoria: categoriaOperacionSelect.value,
        fecha: inputFecha.value,
    }

    if (pintarOperacion.tipo === "Gasto") {
        pintarOperacion.monto = Number(pintarOperacion.monto) * -1;
    }

    operaciones.push(pintarOperacion);
    localStorage.setItem('operacionesStorage', JSON.stringify(operaciones));
    const agarrarOperacionesStorage = JSON.parse(localStorage.getItem('operacionesStorage'));
    reseteoForm();
    creandoOperaciones(agarrarOperacionesStorage);
    pagBalance.style.display = 'block'
    pagNuevaOperac.style.display = 'none' // para volver al balance
});

//-------Pintar operaciones 
// function createOperation (){
//     const wrapper = document.createElement('div')

//     function renderHTML (){
//         if(state.)
//     }
// }
const creandoOperaciones = (operaciones) => {
     
    escribirOperacion.innerHTML = '';
     SinoHayOcultarOpe (operaciones)
     for (let i = 0; i < operaciones.length; i++) {
      
    const box =
    `<div class = "${operaciones[i].id}">
         <div class ="mb-3" 
            <div class="columns is-multiline is-mobile is-vcentered">
                <div class="column is-3-tablet is-6-mobile">
                    <h3 class="has-text-weight-semibold is-size-6">${operaciones[i].descripcion}</h3>
                </div>

                <div class="column is-tablet is-6-mobile has-text-right-mobile>
                    <span class="tag is-info is-light is-rounded is-size-6">${operaciones[i].categoria}</span>
                </div>

                <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-left-tablet is-size-6">
                    ${operaciones[i].fecha}
                </div>

                <div class=column is-2 has-text-right is-size-6 ${operaciones[i].tipo === 'Ganancia'? 'tag is-primary is-light is-rounded' : 'tag is-danger is-light is-rounded'}">
                    $${operaciones[i].monto}
                </div>

                <div class="column is-2-tablet has-text-right">
                    <button class="button is-inverted tag is-link is-size-6" onclick="editarOperacion('${operaciones[i].id}')"><i class="fas fa-pen"></i></button>
                    <button class="button is-inverted tag is-danger is-size-6" onclick="eliminarOperacion('${operaciones[i].id}')"><i class="fas fa-trash-alt"></i></i></button>
                </div> 
            </div>
        </div>
    </div>` 
    escribirOperacion.insertAdjacentHTML('beforeend', box) // insertara mi nodo :)               
    }    
}

operaciones = JSON.parse(localStorage.getItem("operacionesStorage")) ?? operaciones;
creandoOperaciones(operaciones);
SinoHayOcultarOpe(operaciones);

//----------->>>Eliminar Operacion agregada<<<<------

const eliminarOper = (operacion) =>{

    const valor = operaciones.findIndex((elem) => elem.id === operacion);

    if (valor >= 0) {
        operaciones.splice(valor, 1);
        localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
        creandoOperaciones(operaciones);
    }
}


}) //cierra window














