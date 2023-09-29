const time = document.getElementById('time');
const ct = document.getElementById('ct');

function calc() {
  const tx = document.getElementsByTagName('textarea')[0].value;
  const calculate = tx.trim().split(/\s+/).length / 200;
  const calculated = Math.floor(calculate) + ' minutes and ' + (parseInt(calculate.toFixed(2).toString().split('.')[1]) * 0.6).toString().substring(0, 2) + ' seconds';
  ct.style.display = 'inline-block';
  time.innerHTML = calculated;
}