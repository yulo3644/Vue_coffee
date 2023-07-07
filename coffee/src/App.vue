<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
    .auto_img{
        width: 100%;
        display:block;
    }
    .fl{
        float:left;
    }
    .fr{
        float: right;
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .one_text{
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
