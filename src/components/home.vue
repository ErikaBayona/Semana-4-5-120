<template>
  <div>
    
     <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        <a class="navbar-brand " href="/">
            <img src="https://image.freepik.com/free-vector/established-international-trade-routes-selling-goods-overseas-export-control-export-controlled-materials-export-licensing-services-concept-pinkish-coral-bluevector-isolated-illustration_335657-1794.jpg" width="30 " height="30
    " class="d-inline-block align-top rounded " alt=" " loading="lazy "> Transport 120
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul class="navbar-nav ">
                <li class="nav-item active ">
                    <a class="nav-link link " v-on:click="ingresar" href="# ">Login <span class="sr-only ">(current)</span></a>
                </li>
                 <li class="nav-item active ">
                    <a class="nav-link link "  href="#servicios">Servicios <span class="sr-only ">(current)</span></a>
                </li>
                 <li class="nav-item active ">
                    <a class="nav-link link"  href="#testimonios">Testimonios <span class="sr-only ">(current)</span></a>
                </li>
                 <li class="nav-item active ">
                    <a class="nav-link link "  href="#equipo">Equipo <span class="sr-only ">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- carusel -->
     <div id="carrusel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carrusel" data-slide-to="0" class="active"></li>
            <li data-target="#carrusel" data-slide-to="1" class=""></li>
            <li data-target="#carrusel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item ">
                <img src="https://image.freepik.com/free-photo/industrial-port-container-yard_1112-1202.jpg" width="1410" height="500"/>
                
                
                <div class="carousel-caption d-none d-md-block">
                    <h5>CARGA Y DESCARGA DE MERCANCIA</h5>
                    
                </div>
            </div>
            <div class="carousel-item active">
                <img src="https://image.freepik.com/free-photo/transportation-logistics-container-cargo-ship-cargo-plane_37416-150.jpg" width="1410" height="500"/>
                
                
                <div class="carousel-caption d-none d-md-block">
                    <h5>VENTA DE MAQUINARIA</h5>
                    
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://image.freepik.com/free-photo/truck-highway-road-with-container-logistic-industrial-transport-with-sunrise-sky_42493-151.jpg" width="1410" height="500"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>LOGISTICA DE TRANSPORTE DE MERCANCIA</h5>
                    
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carrusel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carrusel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <!-- Quienes somos -->

    <div class="card text-white bg-dark mb-3 no-margin-bnottom" >
  <div class="row g-0">
    <div class="col-md-5">
      <img  class="rounded"  src="https://image.freepik.com/free-vector/established-international-trade-routes-selling-goods-overseas-export-control-export-controlled-materials-export-licensing-services-concept-pinkish-coral-bluevector-isolated-illustration_335657-1794.jpg" >
    </div>
    <div class="col-md-7" style="padding: 30px 0px 0px 160px;">
      <div class="card-body">
        <h1 class="card-title text-center">¿QUIENES SOMOS?</h1>
        <h4 class="card-text text-center">Somos un operador logistico especializado y con mayor cobertura, garantizamos integridad en toda su mercancia y contamos con una ámplia y extensa capacidad de almacenamiento en diversas locaciones estrátegicas en el país, en búsqueda de otorgar la posibilidad de crear puntos de distribución operativamente viables para nuestros cliente.
        Además tenemos a su disposicion la venta de maquinaria requerida para el apoyo de carga y descarga de mercancia.</h4>
      </div>
    </div>
  </div>
</div>
   







    <!-- Servicios -->
    <div class="container-fluid bg-gray " id="servicios">
      <h2 class="text-center" style="color:tomato;">Servicios</h2>
      <div class="row justify-content-center mb-5 no-margin-bnottom">
        <div v-for="(servicio, i) in servicios" :key="i" class="col mt-5" style="margin-top:1rem!important" >
          <div class="card " style="width: 18rem;">
            <img
              src="https://www.marketingdirecto.com/wp-content/uploads/2015/01/servicio_al_cliente.png"
              class="card-img-top"
              alt="servicio imagen"
            />
            <div class="card-body" style="">
              <h5 class="card-title text-center text-tomato">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonios  -->
    <div class="container-fluid bg-dark" id="testimonios">
         <h2 class="text-center"  style="color:tomato;">Testimonios</h2>
      <div class="row justify-content-center">
        <div v-for="(v, i) in [1, 2, 3, 4]" :key="i" class="col mt-5" style="margin-top:1rem!important">
          <div class="card" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                height="50%"
                  src="https://www.marketingdirecto.com/wp-content/uploads/2015/01/servicio_al_cliente.png"
                  class="card-img rounded"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                   
                  </p>
                  <p class="card-text" >
                    <small  class="text-muted">Fecha : 19/12/2020</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- Equipo -->
    <div class="container-fluid" id="equipo">
         <h2 class="text-center"  style="color:tomato;">Equipo</h2>
      <div class="row justify-content-center mb-5">
        <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5" style="margin-top:1rem!important">
          <div class="card text-white bg-dark">
            <div class="d-flex justify-content-center p-2">
              <img :src="miembro.image" width="100px" height="132px" />
            </div>
            <div class="card-body">
              <h5 class="card-title ">
                Team member: {{ miembro.codigo }} {{ miembro.rol }}
              </h5>
              <h5 class="card-title text-tomato">{{ miembro.nombre }}</h5>
              <p class="card-text">{{ miembro.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->

     <footer class="page-footer bg-secondary text-white pt-4 bg-dark">

        <!-- Footer Text -->
        <div class="container-fluid text-center text-md-left ">

            <!-- Grid row -->
            <div class="row ">

                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">

                    <!-- Content -->
                    <h5 class="text-uppercase font-weight-bold">CONTACTENOS</h5>
                    <p>logistica@logisticaytrasporte.com</p>
                    <h5 >
                        Enlaces
                    </h5>
                    <p class="main-menu__link" style="margin-left: 5mm;">
                        <a href="https://github.com/TitoFM16/Semana-2-120/" target="_blank">Reporsitorio GitHub</a>
                    </p>
                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Grid column -->
                <div class="col-md-6 mb-md-0 mb-3">

                    <!-- Content -->
                    <h5 class="text-uppercase font-weight-bold">Para mayor informacion:</h5>
                    <p><ul style="margin-right: 5mm;">
                        <li>Eyder Alexander Herrera Carrillo: Desarrollador - Correo: <a href="alexxherrerac@gmail.com" target="_blank">alexxherrerac@gmail.com</a></li>
                        <li>Aura Zuleta Gómez : Desarrollador - Correo: <a href="amzuletago@unal.edu.co" target="_blank">amzuletago@unal.edu.co</a></li>
                        <li>Erika Bayona Cierra: Desarrollador - Correo: <a href="erika.bayona01@uptc.edu.co" target="_blank">erika.bayona01@uptc.edu.co</a></li>
                        <li>Juan Francisco Figueroa Jimenez: Desarrollador - Correo: <a href="juffigueroama@unal.edu.co" target="_blank">juffigueroama@unal.edu.co</a></li>
                        <li>Yoiler Mosquera Cordoba: Desarrollador - Correo: <a href="yoilerlp595@gmail.com" target="_blank">yoilerlp595@gmail.com</a></li>
                    </ul></p>

                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Text -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-1 bg-dark">© 2020 Copyright: DAD
        </div>
        <!-- Copyright -->

    </footer>


  </div>
</template>

<script>

export default {
  data() {
    return {
      servicios: [
        {
          nombre: "servicio1",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis vehicula laoreet. Quisque lectus odio, tristique quis nisi at, imperdiet dignissim nunc. Praesent lobortis hendrerit erat eu viverra. Fusce vestibulum enim sem. Vivamus porta volutpat orci ut malesuada. Nunc dictum rutrum mollis. Donec elit eros, venenatis at felis a, laoreet posuere sapien. Vivamus ac nibh a erat fringilla tempor. Aenean faucibus ipsum id ornare ullamcorper. Fusce sed nunc in leo pellentesque cursus vel eget lorem. Duis in leo ipsum.",
        },
        {
          nombre: "servicio2",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis vehicula laoreet. Quisque lectus odio, tristique quis nisi at, imperdiet dignissim nunc. Praesent lobortis hendrerit erat eu viverra. Fusce vestibulum enim sem. Vivamus porta volutpat orci ut malesuada. Nunc dictum rutrum mollis. Donec elit eros, venenatis at felis a, laoreet posuere sapien. Vivamus ac nibh a erat fringilla tempor. Aenean faucibus ipsum id ornare ullamcorper. Fusce sed nunc in leo pellentesque cursus vel eget lorem. Duis in leo ipsum.",
        },
        {
          nombre: "servicio3",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis vehicula laoreet. Quisque lectus odio, tristique quis nisi at, imperdiet dignissim nunc. Praesent lobortis hendrerit erat eu viverra. Fusce vestibulum enim sem. Vivamus porta volutpat orci ut malesuada. Nunc dictum rutrum mollis. Donec elit eros, venenatis at felis a, laoreet posuere sapien. Vivamus ac nibh a erat fringilla tempor. Aenean faucibus ipsum id ornare ullamcorper. Fusce sed nunc in leo pellentesque cursus vel eget lorem. Duis in leo ipsum.",
        },
        {
          nombre: "servicio4",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis vehicula laoreet. Quisque lectus odio, tristique quis nisi at, imperdiet dignissim nunc. Praesent lobortis hendrerit erat eu viverra. Fusce vestibulum enim sem. Vivamus porta volutpat orci ut malesuada. Nunc dictum rutrum mollis. Donec elit eros, venenatis at felis a, laoreet posuere sapien. Vivamus ac nibh a erat fringilla tempor. Aenean faucibus ipsum id ornare ullamcorper. Fusce sed nunc in leo pellentesque cursus vel eget lorem. Duis in leo ipsum.",
        },
      ],
      team: [
        {
          codigo: 1,
          nombre: "Juan Francisco Figueroa Martinez",
          descripcion:
            "Universidad Nacional de Colombia - Sede Medellín. 21 años. Disfruto montar cicla",
          rol: "Desarrollador backend",
          image: "juan.jpeg",
        },
        {
          codigo: 2,
          nombre: "Erika Cecilia Bayona Sierra",
          descripcion:
            "Universidad Pedagogica y Tecnologica de Colombia. 22 años. Disfruto ver series y peliculas.",
          rol: "Product Owner",
          image: "erika.jpeg",
        },
        {
          codigo: 3,
          nombre: "Yoyler Mosquera Cordoba",
          descripcion:
            "Ingeniería de sistemas-Universidad Uniclaretiana. Desarrollador web, apasionado por informatica y la tecnologia.",
          rol: "Desarrollador Frontend",
          image: "yoyler.jpeg",
        },
        {
          codigo: 4,
          nombre: "Aura María Zuleta Gómez",
          descripcion:
            "Ingeniera de Petróleos-UNAL, Magister en ing. Civil UFPE. 28 años. Me gusta viajar, leer y hacer Yoga",
          rol: "Desarrollador Frontend",
          image: "aura.jpeg",
        },
        {
          codigo: 5,
          nombre: "Eyder Alexander Herrerra",
          descripcion:
            "Universidad Manuela Beltran. 22 años. Disfruto de montar cicla.",
          rol: "Desarrollador backend",
          image: "eyder.jpeg",
        },
      ],
    };
  },
  mounted() {
    //axios.get("articulo/list").then((response) => (this.datos = response.data));
  },
};
</script>
