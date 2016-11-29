var grid = [];
var grid_steps = 100;
var t = 0;
// assign rule set here
var ruleset_dec = 30;
// define grid dimensions
var rows = 100;
var cols = 100;




function mousePressed(){
	background(50);
	grid = grid.next_gen();
	grid.show();
}

function setup(){
	createCanvas(600,600);
	background(50);
	translate(50,20);
	grid = new Grid( matrix(rows,cols,1), 1 );
	grid.random();
	grid.show();
}


function draw(){
	
	// reset time
	if(t>800){
		t=0;
		grid.random();
	}

	
	background(50);
	translate(50,20);
	grid = grid.next_gen();
	grid.show();
	
	//console.log(t);
	
	t++;	
}

/*
function random_cells(len){
	var cells = [];
	for(var i=0;i<len;i++){
		cells.push(Math.random() >= 0.5);
	}
	return cells;
}*/
