window.addEventListener("load", () => {
  //------------------BOTONES---------------//
  const burgerMenu = document.getElementById("navbar-burger");
  const navbarMenu = document.getElementById("navbar-menu");
  const btnBalance = document.getElementById("btn-balance");
  const btnCategorias = document.getElementById("btn-categorias");
  const btnReportes = document.getElementById("btn-reportes");

  //------------------balnce---------------//

  const pagBalance = document.getElementById("pag-balance");
  const balanceGanancias = document.getElementById("balance-ganancias");
  const balanceGastos = document.getElementById("balance-gastos");
  const balanceTotal = document.getElementById("balance-total");

  //-----------------------------FILTROS----------------------------------
  const filtroFecha = document.getElementById("filtro-fecha");
  const filtros = document.getElementById("filtros");
  const btnOcultarFiltro = document.getElementById("btn-ocultar-filtro");
  const filtroTipo = document.getElementById("filtro-tipo");
  const filtroCategoria = document.getElementById("filtro-categoria");
  const filtroOrdenar = document.getElementById("filtro-ordenar");

  //---------------------Nueva operacion-------------------------------------
  const btnNuevaOperac = document.getElementById("btn-nueva-operac");

  const pagNuevaOperac = document.getElementById("pag-nueva-operac");
  const categoriaOperacionSelect = document.getElementById("categoria-operacion-select");
  const btnCancelar = document.getElementById("btn-cancelar");
  const btnAgregar = document.getElementById("btn-agregar");

  //SIN OPERACIONES
  const verSinOperac = document.getElementById("ver-sin-operac");
  //TABLA OPERACIONES
  const tablaOperaciones = document.getElementById("tabla-operaciones");
  const escribirOperacion = document.getElementById("escribir-operacion");
  

  //Inputs
  const inputDescripcion = document.getElementById("input-descripcion");
  const inputMonto = document.getElementById("input-monto");
  const inputTipo = document.getElementById("input-tipo");
  const inputFecha = document.getElementById("input-fecha");

  //----------------EDITAR OPERACIONES

  const paginaEditarOperac = document.getElementById("pagina-editar-operac");
  const inputEditarDescripcion = document.getElementById("input-editar-descripcion");
  const inputEditarMonto = document.getElementById("input-editar-monto");
  const inputEditarTipo = document.getElementById("input-editar-tipo");
  const inputEditarFecha = document.getElementById("input-editar-fecha");
  const categoriaOperacEditarSelect = document.getElementById("categoria-operac-editar-select");

  const btnCancelarEditar = document.getElementById("btn-cancelar-editar");
  const btnEditarEditar = document.getElementById("btn-editar-editar");

  //-----------------------------CATEGORIAS----------------------------------

  const paginacateg = document.getElementById("pagina-categ");
  const agregarCategoriaBoton = document.getElementById("agregar-categoria-boton");
  const listaCategorias = document.getElementById("lista-categorias");
  const editarCategoria = document.getElementById("editar-categoria");
  const inputEditarCategoria = document.getElementById("input-editar-categoria");
  const btnCancelEditCategory = document.getElementById("btn-cancel-edit-category");
  const btnEditEditCategory = document.getElementById("btn-edit-edit-category");
  const categoriaInput = document.getElementById("categoria-input");

  //-------------------Reportes-----------------------------------------------

  const paginaReportes = document.getElementById("pagina-reportes");

  //-----------------Seccion sin los reportes

  const sinReportes = document.getElementById("sin-reportes");

  //----------------Seccion con reportes

  const conReportes = document.getElementById("con-reportes");
  const reporteResumen = document.getElementById("reporte-resumen");

  const reporteTotalCategorias = document.getElementById("reporte-total-categorias");
  const reporteTotalMes = document.getElementById("reporte-total-mes");

  
  const listadoReportes = document.getElementById("listado-reportes");
 
  

  // ---------Boton Balance
  btnBalance.addEventListener("click", () => {
    pagBalance.style.display = "block";
    paginacateg.style.display = "none";
    paginaReportes.style.display = "none";
    pagNuevaOperac.style.display = "none";
    paginaEditarOperac.style.display = "none";
    editarCategoria.style.display = "none";
  });

  //------------Boton Categorias
  btnCategorias.addEventListener("click", () => {
    pagBalance.style.display = "none";
    paginacateg.style.display = "block";
    paginaReportes.style.display = "none";
    pagNuevaOperac.style.display = "none";
    paginaEditarOperac.style.display = "none";
    editarCategoria.style.display = "none";
  });
  ///----------------Reportes
  btnReportes.addEventListener("click", () => {
    pagBalance.style.display = "none";
    paginacateg.style.display = "none";
    paginaReportes.style.display = "block";
    pagNuevaOperac.style.display = "none";
    paginaEditarOperac.style.display = "none";
    editarCategoria.style.display = "none";
  });

  btnNuevaOperac.addEventListener("click", () => {
    pagBalance.style.display = "none";
    pagNuevaOperac.style.display = "block";
  });

  btnCancelarEditar.addEventListener("click", () => {
    pagBalance.style.display = "block";
    paginaEditarOperac.style.dislpay = "none";
  });

  //-----Input Fecha
  const date = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };

  inputFecha.value = date();
  inputEditarFecha.value = inputFecha.value;
  filtroFecha.value = inputFecha.value;

  // --------------------------OPERACIONES------------------------------
  // funcion para generar id con metodo math para despues usarlo cuando agregue la funcion de pintar operacion
  // const generateId = () => {
  //     let p1 = Math.floor(Math.random() * 0x10000);
  //     let p2 = new Date().getTime();
  //     return `${p1}${p2}`;
  // };
  //----------------------------Nueva Operacion------------------
  //Vor a crear las catergorias asignandole un id relacionado al nombre q se predefinido
  let categories = [
    { id: 0, name: "Servicios" },
    { id: 1, name: "Transporte" },
    { id: 2, name: "Educacion" },
    { id: 3, name: "Trabajo" },
    { id: 4, name: "Comida" },
  ];

  const reseteoForm = () => {
    inputDescripcion.value = "";
    inputMonto.value = 0;
    inputTipo.value = "gasto";
    categoriaOperacionSelect.value = categories[0].name;
    inputFecha.value = date();
  };

  const SinoHayOcultarOpe = (operaciones) => {
    if (operaciones === 0) {
      // si no hay operaciones oculto la tabla para q se vea la imagen
      tablaOperaciones.style.display = "none";
      verSinOperac.style.display = "block";
    } else {
      // si se agragaron q se vea la tabla
      tablaOperaciones.style.display = "block";
      verSinOperac.style.display = "none";
    }
  };

  //------------------------------------------Agregar operaciones----------------------------------------------

  let operaciones = [];
  let balance = [];

  btnAgregar.addEventListener("click", () => {
    const pintarOperacion = {
      id: crypto.randomUUID(),
      descripcion: inputDescripcion.value,
      monto: inputMonto.value,
      tipo: inputTipo.value,
      categoria: categoriaOperacionSelect.value,
      fecha: inputFecha.value,
    };

    if (pintarOperacion.tipo === "gasto") {
      pintarOperacion.monto = Number(pintarOperacion.monto) * -1;
    }

    operaciones.push(pintarOperacion);
    localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
    const agarrarOperacionesStorage = JSON.parse(
      localStorage.getItem("operacionesStorage")
    );
    reseteoForm();
    creandoOperaciones(agarrarOperacionesStorage);
    pagBalance.style.display = "block";
    pagNuevaOperac.style.display = "none"; // para volver al balance
  });

  //--------------------------------------------------------->>>Editar operacion<<<<<-----------------------

  let posicion;

  const editarOperacion = (operacionId) => {
    pagBalance.style.display = "none";
    paginaEditarOperac.style.display = "block";

    posicion = operaciones.findIndex((elem) => elem.id === operacionId);

    if (inputEditarTipo.value === "gasto") {
      inputEditarMonto.value = Number(operaciones[posicion].monto) * 1;
    }
    inputEditarDescripcion.value = operaciones[posicion].descripcion;
    inputEditarMonto.value = operaciones[posicion].monto;
    inputEditarTipo.value = operaciones[posicion].tipo;
    inputEditarCategoria.value = operaciones[posicion].categoria;
    inputEditarFecha.value = operaciones[posicion].fecha;

    return posicion;
  };
  //-------------------------------------boton editar-----------------------------------------------------

  btnEditarEditar.addEventListener("click", () => {
    operaciones[posicion].descripcion = inputEditarDescripcion.value;
    operaciones[posicion].monto = inputEditarMonto.value;
    operaciones[posicion].tipo = inputEditarTipo.value;
    operaciones[posicion].categoria = inputEditarCategoria.value;
    operaciones[posicion].fecha = inputEditarFecha.value;

    
    creandoOperaciones(operaciones);
    
    localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
    pagBalance.style.display = "block";
    paginaEditarOperac.style.display = "none";
  });

  const creandoOperaciones = () => {
    escribirOperacion.innerHTML = "";
    SinoHayOcultarOpe(operaciones);
    for (let i = 0; i < operaciones.length; i++) {
      const box = `<div data-id = "${operaciones[i].id}">
            <div class ="mb-3" 
                <div class="columns is-multiline is-mobile is-vcentered">
                    <div class="column is-3-tablet is-6-mobile">
                        <h3 class="has-text-weight-semibold is-size-6">${
                          operaciones[i].descripcion
                        }</h3>
                    </div>

                    <div class="column is-tablet is-6-mobile has-text-right-mobile>
                        <span class="tag is-info is-light is-rounded is-size-6">${
                          operaciones[i].categoria
                        }</span>
                    </div>

                    <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-left-tablet is-size-6">
                        ${operaciones[i].fecha}
                    </div>

                    <div class=column is-2 has-text-right is-size-6 ${
                      operaciones[i].tipo === "Ganancia"
                        ? "tag is-primary is-light is-rounded"
                        : "tag is-danger is-light is-rounded"
                    }">
                        $${operaciones[i].monto}
                    </div>

                    <div class="column is-2-tablet has-text-right">
                        <button class="button is-inverted tag is-link is-size-6"('${
                          operaciones[i].id
                        }')"><i class="fas fa-pen"></i></button>
                        <button class="button is-inverted tag is-danger is-size-6"('${
                          operaciones[i].id
                        }')"><i class="fas fa-trash-alt"></i></i></button>
                    </div> 
                </div>
            </div>
        </div>`;
      escribirOperacion.insertAdjacentHTML("beforeend", box); // insertara mi nodo :)
      const operacion = escribirOperacion.querySelector(
        `div[data-id="${operaciones[i].id}"]`
      );
      const buttons = operacion.querySelectorAll("button.button");
      //console.log(buttons);
      const buttonEditor = buttons[0];
      const buttonEliminar = buttons[1];

      buttonEditor.addEventListener("click", () => {
        //alert("editar");
        editarOperacion(operaciones[i].id)     
        
      });

      buttonEliminar.addEventListener("click", () => {
        operaciones = operaciones.filter(
          (operacion) => operacion.id !== operaciones[i].id
        );
        creandoOperaciones();
        localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
      });
    }
  };

  operaciones =
    JSON.parse(localStorage.getItem("operacionesStorage")) ?? operaciones;
  creandoOperaciones(operaciones);
  SinoHayOcultarOpe(operaciones);

  //----------->>>  add Categoria                <<<<------

  const addCategoria =  () =>{
    if(categoriaInput.value != ""){
        categories.push({ id: categories.length, name:categoriaInput.value})

        categoriaInput.value ="";
    }
    localStorage.setItem('categorias', JSON.stringify(categories))
    categories = JSON.parse(localStorage.getItem('categorias'))
  } 

  //------------->>>>  editar mi categoria  <<<<<<<------------------
 
  let index;

  const editCategory = (category) => {
    editarCategoria.style.display = 'block'
    paginacateg.style.display = 'none'
    console.log(category)
    index = categories.findIndex((e) => e.id === Number(category));
    inputEditarCategoria.value = categories[index].name
    return index
  };
  
//-------------------------->>>Boton de EDITAR CATEGORIA<<<------------------------
 
btnEditEditCategory.addEventListener("click", () => {
    categories[index].name = inputEditarCategoria.value;
    localStorage.setItem("categorias", JSON.stringify(categories));

    creandoOperaciones(operaciones);
    editarCategoria.style.display = 'none'
    paginacateg.style.display = 'block'
  })

//--------------------------->>> ELIMINAR CATEGORIA <<<----------------------------

const deleteCategory = (category) => {
    const value = categories.findIndex((e) => e.id == category);

    if(value >= 0) {
        categories.splice(value, 1);
        localStorage.setItem("categorias", JSON.stringify(categories));
    };
};


//----------------------->>> Ahora el boton de Eliminar Categoria <<<-----------------------
 
btnCancelEditCategory.addEventListener('click', () => {
    creandoOperaciones(operaciones);
    editarCategoria.style.display ='none'
    paginacateg.style.display = 'block'
});




}); //cierra window
