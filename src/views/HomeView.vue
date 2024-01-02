<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {

        }
    },
    components: {
        RouterLink,
        RouterView,
    }
}
</script>

<template>
    <div class="bgArea">
        <h1>記帳小幫手</h1>
        <div class="accArea">
            <div class="accountArea">
                <label for="" class="title">帳號</label>
                <input type="text" placeholder="XXX@gmail.com">
            </div>
            <div class="pwdArea">
                <label for="" class="title">密碼</label>
                <input type="text" placeholder="********">
            </div>
        </div>
        <div class="btnArea">
            <RouterLink to="/AccountingSignup">
                <button type="button" class="btn btn-primary">註冊</button>
            </RouterLink>
            <RouterLink to="/AccountingLogPage">
                <button type="button" class="btn btn-info">登入</button>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100vw;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .accArea {
        width: 80vw;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .accountArea {
            width: 30vw;
            height: 10vh;
            display: flex;
            flex-direction: column;
        }

        .pwdArea {
            width: 30vw;
            height: 10vh;
            display: flex;
            flex-direction: column;
            margin-top: 5vh;
        }
    }

    .btnArea {
        width: 30vw;
        display: flex;
        justify-content: space-around;
    }
}

h1 {
    color: #4c7da0;
}

.title {
    display: flex;
    margin-bottom: 10px;
}

input {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 10px;
    font-family: "Microsoft soft";
}
</style>