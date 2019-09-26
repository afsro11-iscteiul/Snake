class Snake{
	constructor(){
		this.body = new Array(0)
		for(var i=0; i<5; i++){
			this.body.push(new Pos(13+i,13))
		}
		this.lastPos
	}
	getBody(){
		return body
	}
	updateX(x){
		this.head.setX(x)
	}
	updateY(y){
		this.head.setY(y)
	}
	move(xa, ya){
		//move head
		this.lastPos = new Pos (this.body[0].getX(),this.body[0].getY())
		let temp2
		this.body[0].setX(this.body[0].getX()+xa)
		this.body[0].setY(this.body[0].getY()+ya)
		
		//update body positions
		for (var i=1; i<this.body.length;i++) {
			temp2 = this.body[i]
			this.body[i]=this.lastPos
			this.lastPos=temp2
		}

		//grid edges
		for (var i = 0; i <this.body.length; i++) {
			if(this.body[i].getX() > 19){
				this.body[i].setX(0)
			}
			if(this.body[i].getY() > 19){
				this.body[i].setY(0)
			}	
			if(this.body[i].getX() < 0){
				this.body[i].setX(19)
			}	
			if(this.body[i].getY() < 0){
				this.body[i].setY(19)
			}
		}

	}
	getLength(){
		return this.body.length
	}

	addBody(){
		this.body.push(this.body[this.body.length-1])
	}

	checkCollisions(){
		let head = this.body[0]
		for ( var i=1; i<this.body.length; i++){
			if (head.getX() == this.body[i].getX() && head.getY() == this.body[i].getY())
				return true
		}
		return false
	}

}
