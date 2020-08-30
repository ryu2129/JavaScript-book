var data = ['aa', 'bb']
console.log(data[0])

var ary = [5,25,10];
console.log(ary.sort());
console.log(ary.sort(function(x,y) {
  return x - y;
}));

function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error('引数の数が間違っています。:' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage('山田');
} catch(e) {
  window.alert(e.message);
}