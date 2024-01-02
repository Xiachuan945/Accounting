<script>
export default {
  data() {
    return {
      delmoney: "",
      deleteArr: []
    }
  },
  methods: {
    emitGo() {
      let x = 0
      this.$emit("delpage", x);
      // - - - - - - - - - - - - - - - - - - - - - - // 
      this.delmoney = this.delarr[this.delindex].amount
      this.$emit("delemoney", this.delmoney)
      // - - - - - - - - - - - - - - - - - - - - - - // 
      this.delarr.splice(this.delindex, 1)
      this.deleteArr = this.delarr
      this.$emit("deletearr", this.deleteArr)
    }
  },
  props: [
    'delindex',
    'delarr'
  ],
}
</script>

<template>
  <div class="delArea">
    <p>確定要刪除嗎？</p>
    <br>
  </div>
  <button type="button" class="confirmBtn" @click="emitGo">確定</button>
</template>

<style lang="scss" scoped>

.confirmBtn {
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #4c7da0;
  color: white;
}
</style>