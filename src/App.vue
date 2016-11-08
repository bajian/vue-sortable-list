<template>
  <div id="app">
    <sortable-list
    :titles="sorttitles"
    :list="list"
    :sorting-index='0'
    sorting-type="desc"
    @sort-finish="onSortFinsh"
    >
    <transition-group tag="div" name="item-complete">
    <div :key="item.season_id" class="item" v-for="(item,index) in list">
      <img :src="item.cover">
      <div class="text-container">
        <div class="title">{{item.title}}</div>
        <div>{{item.last_time | parseTime('MM月DD日 h:mm')}}</div>
        <div>更新至第{{item.newest_ep_index}}话</div>
        <div>{{item.favourites>10000?(item.favourites/10000).toFixed(1)+'万':item.favourites}}人追番</div>
      </div>
    </div>
    </transition-group>
  </sortable-list>
</div>

</template>

<script>
  import sortableList from './components/sortable-list'

  export default {
    name: 'app',
    components: {
      sortableList
    },
    methods:{
      onSortFinsh(list){
        console.log('onSortFinsh');
        console.log(JSON.stringify(list));
        this.list=list
      }
    },
    data(){
      return {
        sorttitles:[{
          key:'watching_count',
          name:'在线人数'
        },{
          key:'last_time',
          name:'更新时间'
        },{
          key:'favourites',
          name:'追番人数'
        },],
        list:[{
          "cover": "http://i0.hdslb.com/bfs/bangumi/9925ece99e3458760fc074e8564f74a1d6f46e1d.jpg",
          "favourites": "49176",
          "is_finish": 0,
          "is_started": 1,
          "last_time": 1478558710,
          "newest_ep_index": "7",
          "pub_time": 1474905600,
          "season_id": 5504,
          "season_status": 2,
          "title": "喵阿楞",
          "watching_count": 75
        },
        {
          "cover": "http://i0.hdslb.com/bfs/bangumi/82709ec1fb027631b1f939c9dfcc2d850ffa12a2.jpg",
          "favourites": "62923",
          "is_finish": 0,
          "is_started": 1,
          "last_time": 1478540110,
          "newest_ep_index": "6",
          "pub_time": 1475516100,
          "season_id": 5539,
          "season_status": 2,
          "title": "灼热乒乓妹",
          "watching_count": 636
        },
        {
          "cover": "http://i0.hdslb.com/bfs/bangumi/3501378364ff84cbb42d2ee946334cd3b2dec453.jpg",
          "favourites": "370611",
          "is_finish": 0,
          "is_started": 1,
          "last_time": 1478538300,
          "newest_ep_index": "6",
          "pub_time": 1475514300,
          "season_id": 5542,
          "season_status": 2,
          "title": "TRICKSTER",
          "watching_count": 993
        },
        {
          "cover": "http://i0.hdslb.com/bfs/bangumi/c74ba43e76c346476c8c09e653d35de69073cc49.jpg",
          "favourites": "115564",
          "is_finish": 0,
          "is_started": 1,
          "last_time": 1478534410,
          "newest_ep_index": "6",
          "pub_time": 1475424000,
          "season_id": 5543,
          "season_status": 2,
          "title": "学园Handsome",
          "watching_count": 172
        },
        {
          "cover": "http://i0.hdslb.com/bfs/bangumi/a7d604cb9024faeb775a79a95c33542e3cdd420c.jpg",
          "favourites": "78705",
          "is_finish": 0,
          "is_started": 1,
          "last_time": 1478529010,
          "newest_ep_index": "6",
          "pub_time": 1475505000,
          "season_id": 5540,
          "season_status": 2,
          "title": "斯特拉的魔法",
          "watching_count": 427
        }]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 400px;
    margin: auto;
  }

  .item{
    cursor: pointer;
    position: relative;
    height: 11.625rem;/* 465px */
    border-bottom: 1px solid #ddd;
    background: #eaeaea;
  }
  .item>img{
    position: absolute;
    left: .7rem;/* 28px */
    top: .7rem;/* 28px */
    width: 7.75rem;/* 310px */
    height: 10.45rem;/* 418px */
    border-bottom: 1px solid #ddd;
    background: #eaeaea;
  }

  .text-container{
    position: absolute;
    left: 9.65rem;/* 386px */
    text-align: left;
    color: #999
  }

  .text-container >div{
    margin-bottom: 1.25rem;/* 50px */
  }
  .text-container .title{
    font-weight: bold;
    margin-top: 2rem;/* 80px */
    color: black
  }

.item-complete-move{
transition: transform 1s;
-moz-transition: transform 1s;
-webkit-transition: transform 1s;
-o-transition: transform 1s;
}
</style>
