function thousandth(number) {
  let numArr = String(number).split('.')
  let num = numArr[0],ret = ''
  while(num.length > 3){
    ret = ',' + num.slice(-3) + ret
    num = num.slice(0, num.length - 3)
  }
  if (num.length > 0) {
    ret = num + ret
  }
  return numArr[1] ? (ret + '.' + numArr[1]) : ret
}
export thousandth