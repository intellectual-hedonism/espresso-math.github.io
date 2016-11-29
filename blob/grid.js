function Grid(mat, generation){

	this.generation = generation;

	// initialize Grid with 2d array
	this.cells = mat;

	/*
	// create next generation
	this.next_gen = function(ruleset){
		//return new Grid(this.cells, this.generation + 1);

		// next gen cells
		var n_cells = [];
		n_cells.push(cells[0]);

		// iterate through cells
		for(var i=1;i<cells.length -1;i++){
			// convert bit arrays to decimal
			neighborhood = cells[i-1] << 2 | cells[i] << 1 | cells[i+1];
			// fill in next gen
			n_cells.push(ruleset[ruleset.length - neighborhood -1]);
		}
		n_cells.push(cells[cells.length -1]);

		return new Grid(n_cells, this.generation +1);
	}*/

	

	this.show = function(){
		stroke(190);
		for(var i=0;i<this.cells.length;i++){
			for(var j=0;j<this.cells[i].length;j++){
				if(this.cells[i][j]){
					rect(5*i,5*j,5,5);
				}
			}
		}

	}

	this.random = function(){
		for(var i=0;i<this.cells.length;i++){
			for(var j=0;j<this.cells[i].length;j++){
				this.cells[i][j] = (Math.random() > 0.4);
			}
		}
	}

	this.next_gen = function(){
		// copy cells to n_cells
		n_cells = this.matrix(this.cells.length, this.cells[0].length,0);

		// evolve cells by applying rules of Game of Life
		for(var i=1;i<this.cells.length-1;i++){
			for(var j=1;j<this.cells[i].length-1;j++){
				// check neighborhood
				var neighbors = 0;
				for(var a=-1;a<=1;a++){
					for(var b=-1;b<=1;b++){
						neighbors += int(this.cells[i+a][j+b]);
					}
				}

				// a cell is not a neighbor to itself
				neighbors -= this.cells[i][j];

				/* ------ now the rules ------ */
				// RULE 1 : Death
				if(neighbors >= 4 || neighbors <= 1){
					n_cells[i][j] = false;
				}
				// RULE 2 : Birth
				else if(neighbors == 3){
					n_cells[i][j] = true;
				}
				// RULE 3 : Stasis
				else{
					n_cells[i][j] = this.cells[i][j];
				}
			}
		}

		// create a new grid and return as next gen grid
		return new Grid(n_cells, this.generation + 1);

	}

	this.matrix = function(rows, cols, defaultValue){

		var arr = [];

		// Creates all lines:
		for(var i=0; i < rows; i++){

		      // Creates an empty line
		      arr.push([]);

		      // Adds cols to the empty line:
		      arr[i].push( new Array(cols));

		      for(var j=0; j < cols; j++){
		        // Initializes:
		        arr[i][j] = defaultValue;
		      }
		}

	  return arr;
	}


}