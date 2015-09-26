function Resource(name, inc, cost)
{
	this.Name = name;
	this.Value = 0;
	this.Inc = inc;
	this.UpgradeCost = cost
}

Resource.prototype.Gather = function()
{
	this.Value += this.Inc * ticklength / 1000;
}
Resource.prototype.Display = function()
{
	var id = this.Name + "Output";
	var dispVal = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(this.Value);
	document.getElementById(id).innerHTML = this.Name + " = " + dispVal + " (+" + this.Inc + "/sec)";
}
Resource.prototype.Upgrade = function(other)
{
	if(other.Value >= this.UpgradeCost)
	{
		other.Value -= this.UpgradeCost;
		this.UpgradeCost = Math.ceil(this.UpgradeCost * 1.2);
		this.Inc ++;
	}
}
