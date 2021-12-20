
class Point { 
    private x : number ;
    private y : number ;
  
    private _z : number = 0 ; 
    public get z() : number { 
      return this._z ; 
    }
    public set z ( value : number )  { 
      this._z = value ; 
    }
  
    public addOffset ( xOffset : number, yOffset : number ) : void {
      this.x += xOffset ; 
      this.y += yOffset ;
    }
  
    constructor( ) {
      this.x = this.y = 0 ; 
    } 
  }
  const p1 = new Point() ; 
  console.log(p1.z); // invoking the get property of z
  p1.z = 100 ; // invoking the set property of z
  
  
  
  
  
  
  
  
  
  