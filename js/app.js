/*
*dado el proyecto catclicker declarar una variable cat 
con los atributos name, photo, voteup, votedown
asignar los valores del modelo datos a la estructura 
html e implementar los eventos clik para el incremento 
o decremento de los votos
*/
var arrayGatos=[
cat1={
	name: 'Akamaru',
	selector1:'1',
	selector2:'11',
	selector3:'12',
	photo:'img/cats/1.jpg',
	voteup:10,
	votedown:12
},
cat2 = {
	name: 'Yango',
	photo:'img/cats/8.jpg',
	selector1:'2',
	selector2:'20',
	selector3:'21',
	voteup:5,
	votedown:7
},
cat3 = {
	name: 'Aisha',
	photo:'img/cats/7.jpg',
	selector1:'3',
	selector2:'31',
	selector3:'32',
	voteup:11,
	votedown:19
},
cat4 = {
	name: 'Jacob',
	photo:'img/cats/6.png',
	selector1:'4',
	selector2:'41',
	selector3:'42',
	voteup:14,
	votedown:13
},
cat5 = {
	name: 'Aome',
	photo:'img/cats/5.jpg',
	selector1:'5',
	selector2:'51',
	selector3:'52',
	voteup:10,
	votedown:23
},
cat6 = {
	name: 'Chiquitito',
	photo:'img/cats/4.jpg',
	selector1:'6',
	selector2:'61',
	selector3:'62',
	voteup:5,
	votedown:20
},
cat7 = {
	name: 'Hancock',
	photo:'img/cats/3.jpg',
	selector1:'7',
	selector2:'71',
	selector3:'72',
	voteup:6,
	votedown:14
},
cat8 = {
	name: 'Pulguita',
	photo:'img/cats/2.jpg',
	selector1:'8',
	selector2:'81',
	selector3:'82',
	voteup:9,
	votedown:25
},
cat9 = {
	name: 'Sasha',
	photo:'img/cats/9.jpg',
	selector1:'9',
	selector2:'91',
	selector3:'92',
	voteup:2,
	votedown:24
},

];/*

init(arrayGatos[0]);
init(arrayGatos[1]);
init(arrayGatos[2]);
init(arrayGatos[3]);
init(arrayGatos[4]);
init(arrayGatos[5]);
init(arrayGatos[6]);
init(arrayGatos[7]);
init(arrayGatos[8]);
init(arrayGatos[9]);
*/
function init(cat){
	showData(cat);
}

function showData(cat){
	

$('#todo').append($('<span>').append('<h1 class="'+cat.name+'"></h1>'+
					'<div class="avatar">'+
						'<img src="" id="'+cat.selector1+'" class="img-responsive">'+
					'</div>'+
					'<div class="row">'+
						'<div class="col-xs-6">'+
							'<div class="cliker1" id="'+cat.selector2+'">'+
								'<span class="up"></span>'+
							'</div>'+
						'</div>'+
						'<div class="col-xs-6">'+
							'<div class="cliker2" id="'+cat.selector3+'">'+
								'<span class="down"></span>'+
							'</div>'+
						'</div>'+
					'</div>').append('</span><br>'));
				
		$('.'+cat.name).text(cat.name);
		$('#'+cat.selector1).attr('src',cat.photo);
		$('#'+cat.selector2+' span').text(cat.voteup);
		$('#'+cat.selector3+' span').text(cat.votedown);

}



arrayGatos.forEach(function(e){
	init(arrayGatos[e.selector1]);
	bindEvent(e);
});
function bindEvent(e){
	$('#'+e.selector2).on('click',function clickUp(){
	e.voteup++;
	console.log('hola');
$('#'+e.selector2+' span').text(e.voteup);
});
	$('#'+e.selector3).on('click',function clickDown(){
	e.votedown++;
$('#'+e.selector3+' span').text(e.votedown);
});
}