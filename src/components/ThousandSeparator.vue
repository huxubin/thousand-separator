<template>
  <div style="text-align:left;">
    <input style="width: 500px;" v-model="originNum"/>
    <div>原值：{{originNum}}</div>
    <div>新值：{{result}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      originNum: '-12345678900.98765 千克 - -98765432100.6666600 kg',
      result: 0
    }
  },
  created () {
    this.result = this.handleRange(this.originNum)
  },
  watch: {
    originNum (val) {
      this.result = this.handleRange(val)
    }
  },
  methods: {
    handleRange (value, sep) {
      let _sep = sep || '-'
      let numArr = []
      let valStr = String(value)
      // 处理负符号和区间符相同
      if (_sep !== '-') {
        numArr = valStr.split(_sep)
      } else {
        let hyphen = valStr.replace(/[^\-]/ig, '')
        let _len = hyphen.length
        if (_len === 3) {
          let _indexOf = valStr.indexOf(_sep, 1)
          let newStr = this.replaceCharAt(valStr, _indexOf, 1, '~')
          numArr = newStr.split('~')
        } else if (_len === 2) {
          let _initArr = [...valStr.split(_sep)]
          if (_initArr[0]) {
            // 间隔符和后一个为负（前一个为正），理论上不合理
            // TODO
          } else {
            let _indexOf = valStr.lastIndexOf(_sep)
            let newStr = this.replaceCharAt(valStr, _indexOf, 1, '~')
            numArr = newStr.split('~')
          }
        } else {
          // 可能是-123456万元 或 123456 - 234567 万元
          let _initArr = [...valStr.split(_sep)]
          if (_initArr[0]) {
            numArr = [..._initArr]
          } else {
            numArr[0] = valStr
          }
        }
      }
      let retArr = []
      numArr.forEach((item) => {
        retArr.push(this.handleUnit(item))
      })
      return retArr.join(_sep)
    },
    handleUnit (num) {
      // 非数字、小数和整数间隔.、正负号-
      let numReg = /[0-9.\-]/ig
      let unitName = String(num).replace(numReg, '')
      let unNumReg = /[^0-9.\-]/ig
      let _num = String(num).replace(unNumReg, '')
      return this.handleSign(_num) + unitName
    },
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
      let _num = parseFloat(String(num))
      let numArr = String(_num).split('.')
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
    },
    replaceCharAt (str, index, len, rep) {
      let prefixStr = str.substr(0, index)
      let suffixStr = str.substr(index + len)
      return prefixStr + rep + suffixStr
    }
  }
}
</script>
<style scoped lang="scss">
</style>
