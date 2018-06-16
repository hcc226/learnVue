var app = new Vue({
    el:"#app",
    data:{
        list:[
            {id:1,
            name:'iphone 7',
            price:6188,
                count:1,
                isSelect:false
            },
            {id:2,
                name:'ipad pro',
                price:5888,
                count:1,
                isSelect:false
            },
            {id:3,
                name:'Mac pro',
                price:21488,
                count:1,
                isSelect:false
            },
            ],
        isSelectAll:false,
        countSelect:0
    },
    computed:{
        totalPrice:function () {
            let t = 0;
            for(let i = 0 ;i<this.list.length;i++){
                if(this.list[i].isSelect){
                    t = t+this.list[i].price*this.list[i].count;
                }

            }
            return t;
        }
    },
    methods:{
         handleReduce:function (index) {
            this.list[index].count--;
         },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        remove:function (index) {
            this.list.splice(index,1)
        },
        select:function (index) {
           // this.list[index].isSelect = !this.list[index].isSelect
            if(this.list[index].isSelect){this.countSelect ++;}
            else this.countSelect --;

            if(this.countSelect!==this.list.length){
                this.isSelectAll = false;
            }
            else if(this.countSelect===this.list.length){
                this.isSelectAll = true;
            }
        },
        changeAll:function () {
            if(this.isSelectAll){
                this.countSelect = 0;
            }
            else{
                this.countSelect = this.list.length;
            }
            for(let i = 0 ;i<this.list.length;i++){
                this.list[i].isSelect = this.isSelectAll
            }

        }
    }
});