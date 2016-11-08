<template>
  <div>
    <ul class="sort-title-container">
      <li @click="sort(i)"
      class="sort-title"
      :class="{'sort-up-active':(i==index && type=='asc'),'sort-down-active':(i==index && type!='asc')}"
      v-for="(title,i) in titles"
      :key="i">{{title.name}}
      <span class="triangle-contaier">
        <span class="triangle-up"></span>
        <span class="triangle-down"></span>
      </span>
    </li>
  </ul>
  <slot></slot>
</div>
</template>

<script>
     /**
     * 
     * @author bajian
     * @param  isDesc true/false
     * @param  key the obj key to sort
     * @return 
     */
     var sortObjArrByKey=function(objArr,key,isDesc){
      if (isDesc) {
        objArr.sort(function(a,b){
          return parseFloat(b[key])-parseFloat(a[key])
        });
      }else{
        objArr.sort(function(a,b){
          return parseFloat(a[key])-parseFloat(b[key])
        });
      }
      return objArr
    }

    export default {
      name: 'sortable-list',
      data () {
        return {
          index:0,
          type:'desc'
        }
      },
      mounted(){
        this.$nextTick(function () {
          this.index=this.sortingIndex
          this.type=this.sortingType
          this.list=sortObjArrByKey(this.list,this.titles[this.index]['key'],this.type=='desc')
          this.$emit('sort-finish',this.list)
        })
      },
      props: {
            titles: {//[sortkey=>name]
              type: Array,
              default: []
            },
            list: {//list be used to sort and emit to parent
              type: Array,
              default: []
            },

            sortingIndex: {//be used to set the default sorting title index
              type: Number,
              default: 0//index
            },
            sortingType: {//be used to set the default sorting type
              type: String,
              default: 'desc'//'asc/desc'
            },
          },
          methods: {
            sort(index){
              if (index==this.index) {//reserve
                this.type=this.type=='desc'?'asc':'desc'
              }else{
                this.index=index
                this.type='desc'
              }
              
              this.list=sortObjArrByKey(this.list,this.titles[index]['key'],this.type=='desc')
              this.$emit('sort-finish',this.list)
            }
          }
        }
      </script>

      <style>

        *{
          margin: 0px;
          padding: 0px;
        }

        .triangle-contaier{
          position: relative;
          margin-left: 7px;
        }

        .triangle-up {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #999;
          top: 8%
        }
        .triangle-down {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid #999;
          top: 60%;

        }

        .sort-down-active{
          color: #fb7299;
        }
        .sort-down-active .triangle-down{
          border-top: 7px solid #fb7299 ;
        }

        .sort-up-active{
          color: #fb7299;
        }
        .sort-up-active .triangle-up{
          border-bottom: 7px solid #fb7299 ;
        }

        .sort-title-container{
          position: relative;
          margin: 0 auto;
          list-style: none;
          /*border-bottom: 1px solid #dddddd;*/
          display: -webkit-box;
          display: -moz-box;
          display: -o-box;
          display: -ms-flexbox;
          display: inline-flex;/*UC*/
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .sort-title{
          height: 35px;
          line-height: 35px;
          position: relative;
          text-align: center;
          cursor: pointer;
          outline-style: none;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          font-weight: bold;
        }
      </style>
