import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        name:'caonima',
        phone:'',
        login:0,
        pic:'',
        shopname:'',
        price:'',
        address2:'',
        sellerphone:'',
        type:'',
        id:'',
        shops:[],
        address:'',
        usid:4,
        billcount:0,
        bills:[]
    },
    mutations:{
        showPeople (state,msg,pho,islogin){  //设置用户
            state.name = msg,
            state.phone = pho,
            state.login = islogin
        },
        showShopping(state,npic,nshopname,nprice,naddress2,nsellerphone){
            state.pic = npic,
            state.shopname = nshopname,
            state.price = nprice,
            state.address2 = naddress2,
            state.sellerphone = nsellerphone
        },
        showtype(state,ntype){
            state.type = ntype
        },
        setid(state,nid){
            state.id = nid
        },
        setusid(state,nusid){
            state.usid = nusid.usid
        },
        setshops(state,nshops){  //增加商品
            state.shops.push(nshops)
        },
        deleteshop(state,nshop){
            for(var i = 0; i < state.shops.length; i++) {
                if(state.shops[i].shops.shopname == nshop.shops.shopname){
                    state.shops.splice(i,1)
                }
            }
        },
        setnum(state,nshop){
            for(var i = 0; i < state.shops.length; i++) {
                if(state.shops[i].shops.shopname == nshop.shops.shopname){
                    state.shops[i].shops.num = nshop.shops.num
                }
            }
        },
        setaddress(state,naddress){
            state.address = naddress
        },
        updateshops(state,newshops){
            state.shops = newshops.shops
        },
        setbills(state,nbills){  //增加购物订单
            state.bills.push(nbills.bills)
            state.bills[state.billcount++].address = state.address.shops
        },
    }
})
export default store