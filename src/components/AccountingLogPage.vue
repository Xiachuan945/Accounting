<script>
import AccountingAddTx from './AccountingAddTx.vue';
import AccountingDelete from './AccountingDelete.vue';

export default {
    data() {
        return {
            incomeNum: 0,
            expenseNum: 0,
            totalNum: 0,
            page: 0,
            obj: {},
            arr: [],
            key: 0,
            de: 0,
        }
    },
    components: {
        AccountingAddTx,
        AccountingDelete
    },
    methods: {
        infoGet(info) {
            this.arr.push(info)
            //  --------------------------
            if (info.amount > 0) {
                this.incomeNum = this.incomeNum + info.amount;
            } else {
                this.expenseNum = this.expenseNum + info.amount;
            }
            this.totalNum = this.incomeNum + this.expenseNum
        },

        infodelete(dele) {
            if (dele >= 0) {
                this.incomeNum = this.incomeNum - dele
            } else {
                this.de = Math.abs(dele)
                this.expenseNum = this.expenseNum + this.de
            }
            this.totalNum = this.incomeNum + this.expenseNum;
        },

        delpage(x) {
            this.page = x
        },
        changePage() {
            this.page = 1
        },
        changePage1() {
            this.page = 0
        },
        changePage2(index) {
            this.key = index;
            this.page = 2
        },
        getdelback(x) {
            this.arr = x
        }
    }
}
</script>

<template>
    <div class="bgArea">

        <div class="leftPart">
            <h1>記帳小幫手</h1>
            <!-- <h1>記帳小王子</h1> -->
            <h2>餘額</h2>
            <h2>${{ this.totalNum }}</h2>
        </div>

        <div class="rightPart">

            <div class="upArea">
                <div class="incomeArea">
                    <h1>收入</h1>
                    <h3>${{ this.incomeNum }}</h3>
                </div>
                <div class="expenseArea">
                    <h1>支出</h1>
                    <h3>${{ this.expenseNum }}</h3>
                </div>

            </div>
            <div class="midArea">
                <button type="button" class="addBtn" @click="changePage()">新增項目</button>
            </div>

            <div class="dnArea">
                <div class="list" v-for="item, index in arr">
                    <span class="description">{{ item.description }}</span>
                    <span class="amount" v-if="item.amount >= 0" style="color: #7da24b;">{{ item.amount }}</span>
                    <span class="amount" v-else style="color: #b17013;">{{ item.amount }}</span>
                    <button type="button" class="delBtn" :key="index" @click="changePage2(index)">刪除</button>
                </div>
            </div>
        </div>

        <div class="listArr" v-if="page == 1">
            <i class="fa-solid fa-xmark" @click="changePage1()"></i>
            <AccountingAddTx @transaction="infoGet" @delpage="delpage" />
        </div>

        <div class="listArr" v-if="page == 2">
            <i class="fa-solid fa-xmark" @click="changePage1()"></i>
            <AccountingDelete :delindex="this.key" :delarr="this.arr" @deletearr="getdelback" @delpage="delpage"
                @delemoney="infodelete" />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;

    .leftPart {
        width: 20vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #4c7da0;
        color: white;

        h2 {
            margin-top: 10px;
        }
    }

    .rightPart {
        width: 70vw;
        height: 90vh;
        margin-left: 10vw;

        .upArea {
            width: 60vw;
            height: 25vh;
            display: flex;
            justify-content: space-around;

            .incomeArea {
                color: #7da24b;
            }

            .expenseArea {
                color: #b17013;
            }

            h1 {
                margin-top: 5vh;
            }
        }

        .midArea {
            width: 60vw;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;

            .addBtn {
                width: 150px;
                height: 50px;
                border: 0;
                border-radius: 10px;
                background-color: #4c7da0;
                color: white;
            }
        }

        .dnArea {
            width: 60vw;
            height: 60vh;
            overflow: auto;

            .list {
                width: 40vw;
                height: 7vh;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 16pt;
                color: #4d7da1;
                border: 3px solid #4d7da1;
                border-radius: 10px;
                margin-top: 2vh;
                margin-left: 10vw;
            }

            .description {
                width: 20vw;
            }

            .amount {
                width: 10vw;
            }

            .delBtn {
                width: 6vw;
                height: 5vh;
                border: 0;
                border-radius: 10px;
                background-color: #4c7da1;
                color: white;
            }
        }

    }

    .listArr {
        width: 25vw;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        border: 1px solid black;
        position: absolute;
        margin-left: 45%;
        margin-top: 15%;

        .fa-xmark {
            width: inherit;
            display: flex;
            justify-content: end;
        }
    }
}
</style>