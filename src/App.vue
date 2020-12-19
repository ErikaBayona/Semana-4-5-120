<template>
<div>
  <div v-if="estado">
     <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        <a class="navbar-brand " href="# ">
            <img src="https://image.freepik.com/free-vector/established-international-trade-routes-selling-goods-overseas-export-control-export-controlled-materials-export-licensing-services-concept-pinkish-coral-bluevector-isolated-illustration_335657-1794.jpg" width="30 " height="30
    " class="d-inline-block align-top " alt=" " loading="lazy "> Nombre de la empresa
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul class="navbar-nav ">
                <li class="nav-item active ">
                    <a class="nav-link " v-on:click="ingresar" href="# ">Sistema <span class="sr-only ">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <div id="carrusel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carrusel" data-slide-to="0" class="active"></li>
            <li data-target="#carrusel" data-slide-to="1" class=""></li>
            <li data-target="#carrusel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://image.freepik.com/free-photo/industrial-port-container-yard_1112-1202.jpg" width="1410" height="500"/>
                
                
                <div class="carousel-caption d-none d-md-block">
                    <h5>CARGA Y DESCARGA DE MERCANCIA</h5>
                    
                </div>
            </div>
            <div class="carousel-item">
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
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="card text-white bg-dark mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://image.freepik.com/free-vector/established-international-trade-routes-selling-goods-overseas-export-control-export-controlled-materials-export-licensing-services-concept-pinkish-coral-bluevector-isolated-illustration_335657-1794.jpg" >
    </div>
    <div class="col-md-8" style="padding: 30px 0px 0px 160px;">
      <div class="card-body">
        <h1 class="card-title">¿QUIENES SOMOS?</h1>
        <h4 class="card-text">Somos un operador logistico especializado y con mayor cobertura, garantizamos integridad en toda su mercancia y contamos con una ámplia y extensa capacidad de almacenamiento en diversas locaciones estrátegicas en el país, en búsqueda de otorgar la posibilidad de crear puntos de distribución operativamente viables para nuestros cliente.
        Además tenemos a su disposicion la venta de maquinaria requerida para el apoyo de carga y descarga de mercancia.</h4>
      </div>
    </div>
  </div>
</div>
    <div>
      <home/>
    </div>
    <footer class="page-footer bg-secondary text-white pt-4">

        <!-- Footer Text -->
        <div class="container-fluid text-center text-md-left">

            <!-- Grid row -->
            <div class="row">

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
  <div v-else>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-item @click="home">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Inicio
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-if="logueado">
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Almacén
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'categoria'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Categorías
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'articulo'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Artículos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Accesos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'usuario'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Usuarios
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template> 
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="silver darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-3"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Sistema</span>
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <v-btn @click="salir()" icon v-if="logueado">
        <v-icon>logout</v-icon> Salir
      </v-btn>
      <v-btn :to="{name: 'login'}" icon v-else>
        <v-icon>apps</v-icon> Login
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer height="auto">
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-card flat tile color="primary" class="white--text">
            <v-card-text class="white--text pt-0">
              Proyecto final &copy;2020
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
  </div>
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  components: { home },
  name: 'App',

    data () {
      return {
      drawer: false,
      estado:1
      }
    },

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
  },
  created(){
    this.$store.dispatch("autoLogin");
  },
  methods:{
    salir(){
      this.$store.dispatch("salir");
      this.estado=1
    },

    ingresar(){
      this.estado=0
    },

    home(){
      this.estado=1

    }
  }
};
</script>
