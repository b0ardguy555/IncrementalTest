function Era(name, Res1, Res2, Res3) {
	// Res1-3 are the 3 possible resources of each era
	this.Name = name;
	this.Res1 = Res1;
	if (Res2!=null) 
	{
		this.Res2 = Res2;
	}
	if (Res3!=null) 
	{
		this.Res3 = Res3;
	}
	
	this.ResourceList = [];
	this.ResourceList.push(Res1);
	
	this.getResource = function(name){
		if (name == this.Res1.Name) {
			return this.Res1;
		}
		else if (name == this.Res2.Name) {
			return this.Res2;
		else if (name == this.Res3.Name) {
			return this.Res3;
		}
	};
};
Era.prototype.increment = function() {
	this.Res1.Value += this.Res1.Inc;
	if (this.Res2 != null) {
		this.Res2.Value += this.Res2.Inc;
	}
	if (this.Res3 != null) {
		this.Res3.Value += this.Res3.Inc;
	}
};
