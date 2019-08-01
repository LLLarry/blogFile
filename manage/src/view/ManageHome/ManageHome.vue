<template>
        <div class="manageHome">
            <div class="title first">数据统计</div>
            <ul class="nav clearfix">
                <li>
                    <p>总访问量</p>
                    <p>{{dataCensus.scan_time}}次</p>
                </li>
                <li>
                    <p>今日访问数量</p>
                    <p>{{dataCensus.day_scan_time}}次</p> 
                </li>
                <li>
                    <p>文章总数</p>
                    <p>23个</p>
                </li>
                 <li>
                    <p>文章总数</p>
                    <p>23个</p>
                </li>
            </ul>
            <div class="title">详细统计</div>
            <div class="charts">
                <div id="ct1" ></div>
                <div id="ct2" ></div>
            </div>
        </div>
</template>

<script>
    import { Notification } from 'element-ui';
    var echarts = require('echarts');
    import {getDataCensus,isCheckDayScanHistory} from '../../require/index'
    export default {
        data(){
            return {
                dataCensus: {} //数据统计
            }
        },
        created(){
            asyIsCheckDayScanHistory()
            asyGetDataCensus()
            let _this= this
            async function asyIsCheckDayScanHistory(){
            try{
                await isCheckDayScanHistory()
            }catch(e){

            }
            }
           async function asyGetDataCensus(){
               
               try{
                    let dataCensus=  await getDataCensus()
                    if(dataCensus.data.code === 200){
                        _this.dataCensus= dataCensus.data.censusData[0]
                    }else {
                        Notification({
                            title: '提示',
                            message: '获取统计失败，请稍后重试！',
                            type: "warning",
                            duration: 2000
                        })
                    }
                    
               }catch(e){
                   console.log(e)
                   Notification({
                            title: '提示',
                            message: '获取统计失败，请稍后重试！',
                            type: "warning",
                            duration: 2000
                        })
               }
           }
        },
        mounted(){
             /*ECharts图表*/
        var myChart = echarts.init(document.getElementById('ct1'));
        myChart.setOption({
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
}
)

             /*ECharts图表*/
var myChart = echarts.init(document.getElementById('ct2'));
myChart.setOption({
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})

        }
        
    }
</script>

<style scoped>
.title {
    color: #333;
    font-size: 16px;
    position: relative;
    padding-left: 6px;
    margin-bottom: 15px;
    margin-top: 30px;
}
.title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1px;
    width: 3px;
    bottom: 1px;
    background-color: #FF7F27;
}
.first.title {
    margin-top: 0;
}
.manageHome {
    padding: 20px;
}
.manageHome .nav li{
    width: 20%;
    height: 8vw;
    border: 1px solid #ccc;
    float: left;
    margin-left: 4%;
    border-radius: 4%;
    text-align: center;   
}
.manageHome .nav li p:nth-child(1){
    margin-top: 2vw;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    font-family: cursive;
}
.manageHome .nav li p:nth-child(2){
    margin-top: 1vw;
    font-size: 18px;
    color: #fff;
    font-family: cursive;
}
.manageHome .nav li:nth-child(1){
    background-color: #66b1ffb8;
}
.manageHome .nav li:nth-child(2){
    background-color: #F8A1A4;
}
.manageHome .nav li:nth-child(3){
    background-color: #DAAADB;
}
.manageHome .nav li:nth-child(4){
    background-color: #FFB27D;
}
.manageHome .charts {
    position: absolute;
    left: 20px;
    top: calc(8vw + 122px);
    right: 20px;
    bottom: 20px;
}
.manageHome .charts #ct1{
    width: 50%;
    height: 100%;
    /* background-color: #DAAADB; */
    float: left;
}
.manageHome .charts #ct2{
    width: 50%;
    height: 100%;
    /* background-color: #DAAADB; */
    float: right;
}
</style>
