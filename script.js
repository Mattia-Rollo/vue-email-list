
  const { createApp } = Vue

  createApp({
    data() {
      return {
        listaEmail: []
      }
    },
    methods: {
        callApi(){
          for(let i = 0; i < 11; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
            console.log(res.data.response);
            this.listaEmail.push(res.data.response);
            });
          }
        }
    },
    mounted(){
      this.callApi();
        
    },
    created(){
       
    },
    beforeCreated(){

    },
    befoewUpdate(){

    },
    updated(){

    }
  }).mount('#app')
