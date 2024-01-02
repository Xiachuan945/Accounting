<script>
export default {
    data() {
        return {
            propsObj: {
                description: "",
                amount: ""
            }
        };
    },
    methods: {
        emitGo() {
            this.$emit("transaction", this.propsObj);
            let x = 0
            this.$emit("delpage", x)
        }
    },
}
</script>

<template>
    <div class="addArea">
        <p>品項：</p>
        <input type="text" placeholder="請輸入文字..." v-model="propsObj.description">
        <p>金額：</p>
        <input type="number" placeholder="請輸入金額..." v-model="propsObj.amount">
        <br>
    </div>
    <button type="button" class="addBtn" @click="emitGo">新增</button>
</template>

<style lang="scss">
.addArea {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #4c7da0;

    p {
        display: flex;
        margin-top: 10px;
    }
}

.addBtn {
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    background-color: #4c7da0;
    color: white;
}
</style>