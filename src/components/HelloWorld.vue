<template>
    

      <div class="container-fluid">
          <div class="row justify-content-center mb-5">
              <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                  <div class="card text-white bg-dark">
                      <div class="d-flex justify-content-center p-2">
                          <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                          />
                          <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                      </div>
                      <div class="card-body">
                          <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.Rol}}</h5>
                          <h5 class="card-title"> {{miembro.Nombre}}</h5>
                          <p class="card-text">{{miembro.Descripcion}}
                          </p>
                      </div>
                      <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
</template>

<script>
import axios from 'axios';
export default {
  name: "HelloWorld",

  data() {
        return {
            datos: null,
            team: [{
                codigo: 1,
                Nombre: 'Lucas Mera',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Desarrollador backend',
                Color: 'bg-danger'
            }, {
                codigo: 2,
                Nombre: 'Cristian Sanz',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Arquictecto de software',
                Color: 'bg-dark'
            }, {
                codigo: 3,
                Nombre: 'Samara Cerezo',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Tester',
                Color: 'bg-danger'
            }, {
                codigo: 4,
                Nombre: 'Iris Mesa',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Analista',
                Color: 'bg-dark'
            }]
        };
    },
    

  
};
</script>
