const arr = [2, 2, 2, 3, 4, 5, 5]
const arr1 = [2, 2, 2, 3, 4, 5, 5]
let current = null
let cnt = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== current) {
    if (cnt > 0) {
      console.log(`join ${current} du an: ${cnt} nguoi`)
    }
    current = arr[i]
    cnt = 1
  } else {
    cnt++
  }
}
if (cnt > 0) {
  console.log(`join ${current} du an: ${cnt} nguoi`)
}
let map = {}
map = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev
}, {})
