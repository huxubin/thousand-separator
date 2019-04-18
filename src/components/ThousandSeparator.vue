<template>
  <div style="text-align:left;">
    <div>原值：{{originNum}}</div>
    <div>新值：{{result}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      originNum: -100000234567.123456,
      result: 0
    }
  },
  created () {
    this.result = this.handleSign(this.originNum)
  },
  methods: {
    handleSign (num) {
      if (num > 0) {
        return this.handleNumber(num)
      } else if (num < 0) {
        let _sign = String(num).slice(0, 1)
        let _num = String(num).slice(1)
        return _sign + this.handleNumber(_num)
      } else {
        return num
      }
    },
    handleNumber(num) {
      let numArr = String(num).split('.')
      let _intNum = numArr[0]
      let ret = ''
      while(_intNum.length > 3){
        ret = ',' + _intNum.slice(-3) + ret
        _intNum = _intNum.slice(0, _intNum.length - 3)
      }
      if (_intNum.length > 0) {
        ret = _intNum + ret
      }
      ret += numArr[1] ? ('.' + numArr[1]) : ''
      return ret
    }
  }
}
</script>
<style scoped lang="scss">
</style>
