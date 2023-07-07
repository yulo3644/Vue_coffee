<template>
    <div class="home">
      <van-nav-bar>
        <template #left>
          <div class="home-nav">
            <div class="t1">{{ times }}</div>
            <div class="t2">{{ userInfo }}</div>
          </div>
        </template>
        <template #right>
          <div class="home-search">
            <van-search shape="round" placeholder="请输入搜索关键词" />
          </div>
        </template>
      </van-nav-bar>
      <div class="home-content">
        <div class="banner-box">
          <van-swipe class="my-swiper" :autoplay="3000" indicator-color="#fff">
           <van-swipe-item
           v-for="(item,index) in bannerData"
           :key="index">
               <img class="auto_img" :src="item.bannerImg"/>
           </van-swipe-item> 
          </van-swipe>
        </div>

        <!-- 商品列表 -->
        <div class="product-box">
            <div>
            <div class="clearfix pro-title-box">
                <span class="pro-title">热卖推荐</span>
            </div>

            <!-- 商品内容 -->
            <div class="product clearfix">
                <div class="pro-item fl" v-for="(item,index) in hotProduct" :key="index">
                    <div class="img-box">
                        <img :src="item.smallImg" class="auto_img" alt=""/>
                        <!-- 热卖图标 -->
                        <div class="hot">Hot</div>
                    </div>
                    <!-- 商品名称及价格 -->
                    <div class="pro-info">
                        <div class="pro-name one_text">{{item.name}}</div>
                        <div class="pro-ename one_text">{{item.enname}}</div>
                        <div class="pro-price">￥{{item.price}}</div>
                    </div>
                </div>
            </div>
            </div>   
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import "../assets/less/home.less";
  export default{
    name: "Home",
    data() {
      return {
         bannerData: [],
         times: "",
         userInfo:"于龙",
         //定义一个 接收热卖产品的数据
         hotProduct:[],
      };
    },
    created() {
        this.getDate();
        this.getBannerData();
        this.getHotProduct();
    },
    methods: {
        getDate(){
            let hours=new Date().getHours();
            if(hours<6){
                this.times="凌晨好~！";
            }else if(hours<11){
                this.times="早上好~！";
            }else if(hours<13){
                this.times="中午好~！";
            }else if(hours<18){
                this.times="下午好~！";
            }else if(hours<23){
                this.times="晚上好~！";
            }
        },
        //获取轮播图数据
        getBannerData(){
          this.$toast.loading({
              message : "加载中...",
              forbidClick: true,
              duration: 0,
          });
          this.axios({
            methods: "Get",
            url: "/banner",
            params:{
                 appkey: this.appkey,
            },
          }).then((result) =>{
              this.$toast.clear();
              if(result.data.code==300){
                    this.bannerData=result.data.result;
              }
            }
          ).catch((err) => {
              this.$toast.clear();
          });
        },
        getHotProduct(){
          this.$toast.loading({ 
          message:"加载中...",
          forbidClick:true,
          duration:0,
        });
         
          //发送请求
          this.axios({
            method:"GET",
            url:"/typeProducts",
            params:{appkey:this.appkey,key:"isHot",value:1},
          })
          .then((result)=>{
            this.$toast.clear();
            if(result.data.code==500){
              this.hotProduct=result.data.result;
            }
          })
          .carch((err)=>{
            this.$toast.clear();
          });
        }
    },
  };
  </script>
