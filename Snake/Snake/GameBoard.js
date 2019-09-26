class GameBoard{
	constructor(rows,cols){
		this.matrix = new Array(rows);
		for (var i = 0; i < this.matrix.length ; i++) {
			this.matrix[i] = new Array(cols); 
		}
		for (var i = 0; i < this.matrix.length; i++) {
			for (var j = 0; j < this.matrix[i].length; j++) {
				this.matrix[i][j] = new Pos(i,j)
			}
		}
		this.rows=rows
		this.cols=cols
	}
	getCols(){
		return this.cols
	}
	getRows(){
		return this.rows
	}
	getPos(x,y){
		return matrix[x][y]
	}
}