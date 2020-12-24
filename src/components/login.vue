<template>
    <div>
        <div style="height:90px">
            <img src="../assets/login1.png" width="200px" height="30px" id="pic1" />
        </div>
        <div class="out">
            <div class="content">
                <div class="login">
                    <br />
                    <h4>用户登录界面</h4>
                    <br/>
                    <div class="login-user-div">
                    <i class="fa fa-id-badge fa-3x" id="login-user-pic" ></i>
                    <input type="text" id="username" placeholder=" 请输入用户名/手机号" v-model="user.name" />
                    </div>
                    <br/><br/>
                    <div class="login-user-div">
                    <i class="fa fa-lock fa-3x" id="login-user-pic" ></i>
                    <input type="password" id="password" placeholder=" 请输入登录密码" v-model="user.password" /><br/><br/>
                    </div>
                    <button class="ui basic red button" id="button1" @click="userlogin">登录</button>
                </div>
            </div>
        </div>
        <div class="tmall-button">
            <ul style="margin-left:20px;">
                <li>关于天猫</li><li>帮助中心</li><li>开放平台</li>
                <li>诚聘英才</li><li>联系我们</li><li>网站合作</li>
                <li>法律声明</li><li>隐私权政策</li><li>知识产权</li>
                <li>廉正举报</li><li>规则意见征集</li>
            </ul>
            <ul id="ul2" style="margin-left:20px;transform:translateY(-3px)">
                <li>阿里巴巴集团</li><li>|</li><li>淘宝网</li><li>|</li><li>天猫</li><li>|</li>
                <li>聚划算</li><li>|</li><li>全球速卖通</li><li>|</li><li>阿里巴巴国际交易市场</li><li>|</li>
                <li>1688</li><li>|</li><li>阿里妈妈</li><li>|</li><li>飞猪</li><li>|</li>
                <li>阿里云计算</li><li>|</li><li>AliOS</li><li>|</li><li>阿里通信</li><li>|</li>
                <li>万网</li><li>|</li><li>高德</li><li>|</li><li>UC</li><li>|</li>
                <li>友盟</li><li>|</li><li>虾米</li><li>|</li><li>钉钉</li><li>|</li><li>支付</li>
            </ul>
            <ul style="margin-left:20px;transform:translateY(-8px)">
                <li style="color: #a4a4a4;">浙江省网络食品销售第三方平台提供者备案 ：浙网食A33010002</li>
                <li style="margin-left:60px;color: #a4a4a4;">12318举报</li>
            </ul>
            <ul style="margin-left:20px;transform:translateY(-18px)">
                <li style="color:#686868"><i class="fa fa-copyright" aria-hidden="true"></i> 2003-2020 TMALL.COM 版权所有</li>
            </ul>
            <img src="../assets/shoppinglist/button-1.gif" width="30px" height="30px" id="button-pic1">
            <img src="../assets/shoppinglist/button-2.jpg" width="80px" height="30px" id="button-pic2" style="margin-left:20px;">
        </div>
    </div>
</template>

<script>
export default {
    props:['login'],
    data(){
        return{
            user: {
                name: "",
                password:"",
                phone: "",
            },
            users: []
        }
    },
    mounted() {
        this.getData();
    },
    methods:{
        getData() {
            this.$axios.get("http://localhost:3000/users").then((res) => {
                this.users = res.data;
            })
        },
        userlogin(){
            var issuccess = 0;
            for(var i = 0; i < this.users.length; i++) {
                if(this.users[i].name == this.user.name && this.users[i].password == this.user.password){
                    issuccess = 1;
                    swal('登录','登录成功！','success');
                    this.$store.commit("showPeople",{
                        name: this.user.name,
                        phone:this.users[i].phone,
                        login:1
                    })
                    this.$store.commit("setid",{
                        id:this.users[i].id
                    })
                    console.log(this.$store.state.id.id)
                    this.user = {name:"",password:"",phone:""};
                    var _this = this;
                    setTimeout(function(){
                        _this.$router.push({path:'/'})
                    },3000)
                }
            }
            if(issuccess == 0){
                swal('登录','登录失败！\r\n\r\n账号密码错误','error');
                this.user = {name:"",password:"",phone:""};
            }
        }
    }
}
</script>

<style scoped>
#pic1{
    float: left;
    margin-top: 30px;
    margin-left: 80px;
}
.out{
    width: 100%;
    background-color: pink;
}
.content{
    width: 1190px;
    height: 600px;
    background-color: pink;
    background-image: url(../assets/bg1.png);
    margin: 0 auto;
    text-align: center
}
.login{
    width: 350px;
    min-height: 350px;
    border: 1px solid red;
    color: #6c6c6c;
    background: #fff;
    margin-left: 800px;
    position: relative;
    top: 100px;
}
#username,#password{
    width: 241px;
    height: 43px;
    position: relative;
    top: -10px;
    margin-left: -2px;
    border: 1px solid gray;
    font-size: 15px;
    border: none;
}
.login input:focus{
    border-style:solid;
    border-color: #03a9f4;
    outline: #03a9f4;
	box-shadow: 0 0 10px #03a9f4;
}
#button1{
    width: 100px;
    height: 40px;
    margin-top: 30px;
}
#login-user-pic{
    width: 43px;
    height: 43px;
    margin-top: 1px;
    border-right: 1px solid #ccc;
}
.login-user-div{
    width: 288px;
    height: 45px;
    border: 1px solid #ccc;
    margin: auto;
}
.tmall-button{
    height: 170px;
    border-top: 1px solid red; 
    background-color: black;
}
.tmall-button ul,.tmall-button li{
    font-size: 12px;
    color:white;
}
.tmall-button #ul2 li{
    margin-right: -15px;
}
#button-pic1,#button-pic2{
    position: relative;
    top: -20px;
    margin-left: 80px;
    float: left;
}
li{
    display: inline-block;
    font-size: 18px;
    margin-left: 20px;
    position: relative;
    top: 1px;
}
</style>