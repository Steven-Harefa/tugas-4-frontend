<template>

    <div>

        <br>

        <label>Username</label>    

        &nbsp;

        <input type="text" v-model="name">

        <br>
        <br>

        <label>Password</label>

        &nbsp;

        <input type="password" v-model="password">

        <br>
        <br>

        <button @click="argus">Simpan</button>

        &nbsp;

        <button @click="alucard">Hapus</button>

    </div>    

</template>

<script>

    export default{

        data : function(){

            return{
                name : '',
                password : ''
            }

        },

        created : function(){

            this.name = localStorage.getItem('usr')
            this.password = localStorage.getItem('psd')

        },

        methods : {

            argus : function(){

                localStorage.setItem('usr', this.name)
                localStorage.setItem('psd', this.password)

            },

            alucard : function(){

                localStorage.removeItem('usr')
                localStorage.removeItem('psd')

                this.name = ''
                this.password = ''


            }

        }

    }

</script>
