<template>
  
  <div>

    <ul>

      <li v-for="i in todos" :key="i.ID_Pekerjaan">{{i.user}}<button @click="Hapus(i.ID_Akun)">Hapus</button></li>

    </ul>

    <input v-model="kalimat" name="desc" placeholder="Masukan Deskripsi">

    <br>
    <br>

    <button @click="Tambah">Tambah</button>


  </div>

</template>

<script>

  import axio from 'axios'

    export default {
    
        data : function(){

            return{

                todos : [],
                kalimat : ''

            }

        },

        created : function(){

            const n = localStorage.getItem('usr')
            const p = localStorage.getItem('psd')

            axio.get('http://localhost:3000/todo', {headers: {nama : n, password : p}})
            .then(result => {

                this.todos = result.data

            })

        },

        methods : {

            Tambah : function(){

                const Item_Baru = {desc : this.kalimat}
                const F_T_User = localStorage.getItem('user')
                const F_T_Password = localStorage.getItem('password')

                axio.post('http://localhost:3000/todo', Item_Baru, {headers:{F_T_User, F_T_Password}})
                .then(()=> {

                    location.reload()

                })

            },

            Hapus : function(ID){

                const F_H_User = localStorage.getItem('user')
                const F_H_Password = localStorage.getItem('user')

                axio.post(`http://localhost:3000/todo/${ID}`, {headers:{F_H_User, F_H_Password}})
                .then(()=> {

                    location.reload()

                })

            }

        }

    }

</script>

