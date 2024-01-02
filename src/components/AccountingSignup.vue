<script>
</script>

<template>
    <div class="bgArea">
        <h1>註冊</h1>
        <div class="accArea">
            <div class="accountArea">
                <label for="" class="title">帳號</label>
                <input type="text" placeholder="XXX@gmail.com">
            </div>
            <div class="pwdArea">
                <label for="" class="title">密碼</label>
                <input type="text" placeholder="********">
            </div>
            <div class="rptpwdArea">
                <label for="" class="title">確認密碼</label>
                <input type="text" placeholder="********">
            </div>
            <div class="btnArea">
                <RouterLink to="/">
                    <button type="button" class="btn btn-success">取消</button>
                </RouterLink>
                <button type="button" class="btn btn-primary">送出</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100vw;
    height: 100vh;
    background-color: #4d7da1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .accArea {
        width: 80vw;
        height: 60vh;
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

        .rptpwdArea {
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
    color: white;
}

.title {
    display: flex;
    margin-bottom: 10px;
    color: white;
}

input {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 10px;
    font-family: "Microsoft soft";
    background-color: transparent;
}

.btn {
    outline-style: none;
    border-radius: 5px;
    margin-top: 5vh;
    // padding: 10px 10px;
    font-family: "Microsoft soft";
}
</style>