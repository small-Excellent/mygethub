<template>
    <div class="tmUser">
        <div>
            <input type="text" v-model="user.name"/>
            <input type="text" v-model="user.phone"/>
            <input type="text" v-model="user.age"/>
            <button @click="handleAddUserClick">submit</button>
        </div>
        <!-- <div v-for="item in users" :key="item.name">
            {{ item.purchase[0] }}
        </div> -->
        <div v-for="item in shops" :key="item.name">
            {{ item.shops.price }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'tmUser',
    data(){
        return{
            user: {
                name: "",
                phone: "",
                age: null
            },
            users: [],
            thing:[{shoppng:"aaa",price:"111"}],
            shop:{},
            shops:[]
        }
    },
    mounted() {
        this.getData();
        // this.addpurchase(this.thing);
    },
    methods: {
        getData() {
            this.$axios.get("http://localhost:3000/users/003").then((res) => {
                this.shop = res.data;
                this.shops = this.shop.purchase
                console.log(this.shops[0].shops.price)
            })
        },
        addData(val) {
            this.$axios.post("http://localhost:3000/users", val).then(()=>{})
        },
        // addpurchase(val){
        //     this.$axios.patch("http://localhost:3000/users/003", {
        //         purchase:val
        //     }).then(()=>{})
        // },
        handleAddUserClick () {
            this.addData(this.user);
        }
    }
}
</script>

<style scoped>

</style>