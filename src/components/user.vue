<template>
    
    <div>

        <ul>

            <li v-for="i in v-user" :key="i.ID_Akun">{{i.user}}<button @click="Hapus(i.ID_Akun)">Hapus</button></li>

        </ul>

        <input v-model="user" placeholder="Masukan Username">

        <br>
        <br>

        <input v-model="password" placeholder="Masukan Password">

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

                v_user : [],
                user : '',
                password : ''

            }

        },

        created : function(){

            const u_name = localStorage.getItem('usr')
            const p_name = localStorage.getItem('psd')

            axio.get('http://localhost:3000/user', {headers:{u_name, p_name}})
            .then(result => {

                this.user = result.data

            })

        },

        methods : {

            Tambah : function(){

                const User_Baru = {user: this.user, password: this.password}
                const F_T_User = localStorage.getItem('usr')
                const F_T_Password = localStorage.getItem('psd')

                axio.post('http://localhost:3000/user', User_Baru)
                .then(()=> {

                    location.reload()

                })

            },

            Hapus : function(ID_Akun){

                const F_H_User = localStorage.getItem('usr')
                const F_H_Password = localStorage.getItem('psd')

                axio.post(`http://localhost:3000/user/${ID_Akun}`, User_Baru, {headers:{F_H_User, F_H_Password}})
                .then(()=> {

                    location.reload()

                })

            }

        }

    }

</script>