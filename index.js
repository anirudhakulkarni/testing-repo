const params = new URLSearchParams(document.location.search);
const myNumber = params.get('text');
$('#input').val(myNumber);
$('#a').val(myNumber);
console.log(myNumber);