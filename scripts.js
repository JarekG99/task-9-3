// scripts.js
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
text = text.replace('Velociraptor',dinosaur);
var n = text.length/2;
var text1 = text.slice(0,n);
alert('Text modified - check console');
console.log(text1);
