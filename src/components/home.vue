<template>
<div>
    <div class="container-fluid">
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
            <div v-for="(art,indice) of datos" :key="art.id" class="col-lg-6 col-xs-12 border">
                <div v-if="indice<=3">
                <div  class="d-flex justify-content-center align-items-center">

                    <div class="p-3">
                        <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                            />
                        </svg>
                    </div>

                    <div class="p-2">
                        <p>
                            {{art.nombre}}
                        </p>
                    </div>

                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <button type="button" class="btn btn-outline-info">Info</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center mb-5">
            <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                     <div class="card text-white bg-dark">
                        <div class="d-flex justify-content-center p-2">
                            <img :src="miembro.image">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.rol}}</h5>
                            <h5 class="card-title"> {{miembro.nombre}}</h5>
                            <p class="card-text">{{miembro.descripcion}}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
     data() {
        return {
            datos: null,
            team: [{
    codigo: 1,
    nombre: "Juan Francisco Figueroa Martinez",
    descripcion: "Universidad Nacional de Colombia - Sede Medellín. 21 años. Disfruto montar cicla",
    rol: "Desarrollador backend",
    image: "juan.jpeg"
    },
    {
    codigo: 2,
    nombre: "Erika Cecilia Bayona Sierra",
    descripcion: "Universidad Pedagogica y Tecnologica de Colombia. 22 años. Disfruto ver series y peliculas.",
    rol: "Product Owner",
    image: "erika.jpeg"
    },
    {
    codigo: 3,
    nombre: "Yoyler Mosquera Cordoba",
    descripcion: "Ingeniería de sistemas-Universidad Uniclaretiana. Desarrollador web, apasionado por informatica y la tecnologia.",
    rol: "Desarrollador Frontend",
    image: "yoyler.jpeg"
    },
    {
    codigo: 4,
    nombre: "Aura María Zuleta Gómez",
    descripcion: "Ingeniera de Petróleos-UNAL, Magister en ing. Civil UFPE. 28 años. Me gusta viajar, leer y hacer Yoga",
    rol: "Desarrollador Frontend",
    image: "aura.jpeg"
    },
    {
    codigo: 5,
    nombre: "Eyder Alexander Herrerra",
    descripcion: "Universidad Manuela Beltran. 22 años. Disfruto de montar cicla.",
    rol: "Desarrollador backend",
    image: "eyder.jpeg"
    }]
        };
    },
    mounted() {
     axios.get('articulo/list')
    .then(response => (this.datos = response.data));

    },
    
}
</script>