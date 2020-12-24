<template>
    <div >
        <i class="color-mark" id="list-item-3"></i>      <!-- 潮电区 -->
        <font class="mark-word">潮电酷玩</font>
        <font class="mark-word" style="font-size: 15px;color: #000;">ELECTRONICS</font>
        <div class="shopping-electron">
            <router-link to="/shoppingalllists"><img :src="modelbrand" width="235px" height="618px" class="electron-pic" @click="settype2" ></router-link>
            <div class="brand-word">
                <div class="word-left">
                    <span class="word1">明星同款</span>
                </div>
                <div class="word-right">
                    <span class="word2">畅享音乐<br/>耳机发烧友</span>
                </div>
            </div>
            <div class="brand-wrap">
                <img src="../assets/brand-word.png" id="brand-wrap-pic">
            </div>
            <div class="electron-up shopping1">
                <img src="../assets/shoppinglist/electron-1.png"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    【原封正品】 2020新款Apple/苹果 10.2英<br/>
                    <font>¥ 2999</font>
                </div>
            </div>
            <div class="electron-up shopping2" style="margin-left:500px">
                <img src="../assets/shoppinglist/election-2.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    天猫精灵CCH智能音箱带屏影音追剧<br/>
                    <font>¥ 399</font>
                </div>
            </div>
            <div class="electron-up shopping3" style="margin-left:750px">
                <img src="../assets/shoppinglist/electron-3.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    艾美特取暖器家用节能暖风机电缓气卧室<br/>
                    <font>¥ 379</font>
                </div>
            </div>
            <div class="electron-up shopping4" style="margin-left:1000px">
                <img src="../assets/shoppinglist/electron-4.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    金正 D8移动dvd影碟机家用高清便携式<br/>
                    <font >¥ 379</font>
                </div>
            </div>
            <div class="electron-down shopping5">
                <img src="../assets/shoppinglist/electron-5.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    崩腾空气加湿器家用大容量空调办公室<br/>
                    <font>¥ 99</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:500px">
                <img src="../assets/shoppinglist/electron-6.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    华硕（ASUS）XONAR AE 7.1声道<br/>
                    <font>¥ 499</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:750px">
                <img src="../assets/shoppinglist/electron-7.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    纽曼M100 DVD复读机CD机 录音机U盘<br/>
                    <font>¥ 399</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:1000px">
                <img src="../assets/shoppinglist/electron-8.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    华为Watch GT/GT2/2pro/2E款<br/>
                    <font>¥ 75</font>
                </div>
            </div>
        </div>


        <i id="list-item-4" class="color-mark"></i>   <!-- 衣服区 -->
        <font class="mark-word">美丽人生</font>
        <font class="mark-word" style="font-size: 15px;color: #000;">FASHION & BEAUTY</font>
        <div class="shopping-electron">
            <router-link to="/shoppingalllists"><img :src="imgurl" width="235px" height="618px" class="electron-pic" @click="settype" ></router-link>
            <div class="brand-word">
                <div class="word-left">
                    <span class="word1">轻松生活</span>
                </div>
                <div class="word-right">
                    <span class="word2">温文尔雅<br/>极致条纹感</span>
                </div>
            </div>
            <div class="brand-wrap">
                <img src="../assets/brand-word.png" id="brand-wrap-pic">
            </div>
            <div class="electron-up shopping1">
                <img src="../assets/shoppinglist/clothes-1.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    NIKE耐克双肩包新款男女包儿童包小学生<br/>
                    <font>¥ 213</font>
                </div>
            </div>
            <div class="electron-up shopping2" style="margin-left:500px">
                <img src="../assets/shoppinglist/clothes-2.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    2020新款冬季加绒加厚冲锋衣男潮牌三合<br/>
                    <font>¥ 169</font>
                </div>
            </div>
            <div class="electron-up shopping3" style="margin-left:750px">
                <img src="../assets/shoppinglist/clothes-3.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    户外速干衬衫衬衣速干衣快干衣T恤长袖<br/>
                    <font>¥ 89</font>
                </div>
            </div>
            <div class="electron-up shopping4" style="margin-left:1000px">
                <img src="../assets/shoppinglist/clothes-4.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    CANADA GOOSE / 加拿大鹅 Garson 马<br/>
                    <font >¥ 4000</font>
                </div>
            </div>
            <div class="electron-down shopping5">
                <img src="../assets/shoppinglist/clothes-5.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    2020秋冬新品Columbia哥伦比亚<br/>
                    <font>¥ 679</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:500px">
                <img src="../assets/shoppinglist/clothes-6.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    Adidas阿迪达斯男包女包新款旅行包斜挎<br/>
                    <font>¥ 129</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:750px">
                <img src="../assets/shoppinglist/clothes-7.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    探路者男鞋2020新款运动鞋休闲鞋底耐磨<br/>
                    <font>¥ 199</font>
                </div>
            </div>
            <div class="electron-down shopping2" style="margin-left:1000px">
                <img src="../assets/shoppinglist/clothes-8.jpg"  width="185px" height="185px" style="transform:translateY(15px)">
                <div class="shopping-illustration">
                    TheNorthFace北面<br/>男裤2020冬季新款户<br/>
                    <font>¥ 359</font>
                </div>
            </div>
        </div>


        <div class="end">           
            <img src="../assets/shoppinglist/shopping-end.png" width="80px" height="45px" style="filter:brightness(90%);">
        </div>
        <div class="footer"  id="list-item-5">     <!-- 底部区 -->
            <div class="footer-ensure">
                <a href="https://pages.tmall.com/wow/seller/act/newpinzhibaozhang?spm=875.7931836/B.a2226n1.1.66144265nW1ODA"></a>
                <a href="https://www.tmall.com/wow/seller/act/seven-day"></a>
                <a href="https://www.tmall.com/wow/seller/act/special-service?spm=875.7931836/B.a2226n1.3.66144265nW1ODA"></a>
                <a href="https://helpcenter.tmall.com/index"></a>
            </div>
            <div class="footer-desc">
                <dl id="ensure" >
                    <dt><span>购物指南</span></dt>
                    <dd>
                        免费注册<br/>
                        开通支付宝<br/>
                        支付宝充值
                    </dd>
                </dl>
                <dl id="ensure" >
                    <dt><span>天猫保障</span></dt>
                    <dd>
                        发票保障<br/>
                        售后规则<br/>
                        缺货赔付
                    </dd>
                </dl>
                <dl id="ensure" >
                    <dt><span>支付方式</span></dt>
                    <dd>
                        快捷支付<br/>
                        信用卡<br/>
                        余额宝<br/>
                        蚂蚁花呗<br/>
                        货到付款
                    </dd>
                </dl>
                <dl id="ensure" style="margin-right:90px;">
                    <dt><span>商家服务</span></dt>
                    <dd>
                        天猫规则<br/>
                        商家入驻<br/>
                        商家中心<br/>
                        天猫智库<br/>
                        物流服务<br/>
                        喵言喵语<br/>
                        运营服务
                    </dd>
                </dl>
                <dl >
                    <dt><span id="span1">手机天猫</span></dt>
                    <dd>
                        <img src="../assets/shoppinglist/ensure-QR Code.png" width="105px" height="105px">
                    </dd>
                </dl>
            </div>
        </div>
        <div class="tmall-button">
            <ul style="margin-left:20px;margin-top:10px;">
                <li>关于天猫</li><li>帮助中心</li><li>开放平台</li>
                <li>诚聘英才</li><li>联系我们</li><li>网站合作</li>
                <li>法律声明</li><li>隐私权政策</li><li>知识产权</li>
                <li>廉正举报</li><li>规则意见征集</li>
            </ul>
            <ul id="ul2" style="margin-left:20px;transform:translateY(-10px)">
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
    props:['shoppinglist'],
    
    data(){
        return{
            modelbrand:[
                // "@/assets/brand1.png",
                "https://img.alicdn.com/tps/i4/TB1sgSzhFcJL1JjSZFOwu3WlXXa.png",
                
            ],
            imgurl: require("../assets/shoppinglist/clothes-brand.png"),
        };
    },
    methods: {
        settype(){
            this.$store.commit("showtype",{
                type: '衣服',
            })
        },
        settype2(){
            this.$store.commit("showtype",{
                type: '潮电',
            })
        }
    }
}
</script>
    
<style scoped>
.shopping-electron{
    margin-left: 50px;
    /* width: 100%; */
    height: 620px;
    border: 1px solid red;
    position: relative;
    background-color: rgb(240, 240, 240);
}
.brand-word{
    position: relative;
    vertical-align: middle;
    bottom: 30%;
    width: 218px;
    height: 64px;
    cursor: pointer;
    /* border: 1px solid red; */
}
.word-left{
    background: rgba(0,0,0,.9);
    width: 70px;
    height: 64px;
    overflow: hidden;
    color: #FFF;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.word1{
    display: inline-block;
    vertical-align: middle;
    line-height: 24px;
    font-size: 18px;
    width: 36px;
    overflow: hidden;
}
.word2{
    display: block;
    line-height: 24px;
    font-size: 18px;
    margin-top: 8px;
    margin-left: 20px;
}
.word-right{
    left: 70px;
    top: 0;
    position: absolute;
    background: rgba(0,0,0,.6);
    overflow: hidden;
    width: 145px;
    height: 64px;
    color: #FFF;
    vertical-align: middle;
}
.brand-wrap{
    background-image: linear-gradient(-180deg,rgba(0,0,0,0) 4%,rgba(0,0,0,.36) 100%);
    width: 235px;
    height: 60px;
    position: relative;
    top:-128px;
    left: 0;
}
#brand-wrap-pic{
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
}
.electron-up {
    width: 234px;
    height: 300px;
    /* border: 1px solid red; */
    cursor: pointer;
    position: absolute;
    top: 0px;
    margin-left: 250px;
    padding: 0;
    text-align: center;
    background-color: white;
}
.electron-down {
    width: 234px;
    height: 300px;
    /* border: 1px solid red; */
    cursor: pointer;
    position: absolute;
    top: 318px;
    margin-left: 250px;
    padding: 0;
    text-align: center;
    background-color: white;
}
.electron-down div{
    margin-top: 20px;
}
.electron-up:hover,.electron-pic:hover,.electron-down:hover{
    border: 1px solid #03a9f4;
    /* outline: #03a9f4; */
	box-shadow: 0 0 10px #03a9f4;
}
.shopping-illustration{
    width: 135px;
    height: 80px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    overflow: hidden;
    margin: 8px auto;
    margin-top: 15px;
}
.shopping-illustration font{
    font-size:20px;
    color:red;
    line-height: 50px;
}
.color-mark{
    display: inline-block;
    background-color: #333;
    width: 5px;
    height: 18px;
    vertical-align: middle;
    margin-top: 20px;
    margin-bottom: 15px;
    margin-left: 50px;
}
.mark-word{
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    margin-top:7px;
    margin-left: 10px;
    color:black;
}

.end{
    height: 80px;
    width: 100%;
    border: 1px solid red;
    background-color: rgb(240, 240, 240);
    text-align: center;
    padding: 15px;
}

.footer{
    min-height: 400px;
    border-top: 1px solid #D1D7DC;
    clear: both;
    margin: 0;
    /* text-align: center; */
    background: #fff;
    position: relative;
}
.footer-ensure{
    width: 1190px;
    height: 100px;
    background: url(../assets/shoppinglist/shopping-rooter.jpg) no-repeat;
    margin: 25px auto;
    padding: 0;
}
.footer-ensure a{
    float: left;
    display: block;
    width: 297px;
    height: 100px;
    text-indent: -1000em;
}
.footer-desc{
    width: 1190px;
    padding-top: 22px;
    height: 250px;
    margin: auto;
    border-top: 2px solid #ededede3;
    background-position: 12px bottom;
    background: url(../assets/shoppinglist/footer-desc.jpg) 45px bottom no-repeat;
}
#ensure{
    /* border: 1px solid red; */
    padding-left: 50px;
    width: 200px;
    float: left;
    display: block;
    margin-right: 40px;
}

#ensure span,#span1{
    color: rgba(3, 3, 3, 0.781);
    font-size: 16px;
    font-weight:bold;
    line-height: 30px;
}
#ensure dd{
    margin: 0px;
    font-size: 12px;
    color: #383333c0;
    line-height: 20px;
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
</style>