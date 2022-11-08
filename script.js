
  const { createApp } = Vue

  createApp({
    data() {
      return {
        listaEmail: []
      }
    },
    methods: {
        callApi(){
          const array1 = []
          for(let i = 0; i < 11; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
            console.log(res.data.response);
            array1.push(res.data.response);
            if(i === 10) return this.listaEmail = [...array1];
            });
          }
        }
    },
    mounted(){
      
    },
    created(){
      this.callApi();
       
    },
    beforeCreated(){

    },
    befoewUpdate(){

    },
    updated(){

    }
  }).mount('#app')
