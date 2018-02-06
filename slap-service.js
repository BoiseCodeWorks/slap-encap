//Service is responsibe for all data and data manipulation
function SlapService(){
  //private
  function Target(name, health, slap, punch, kick){
    this.name = name
    this.health = health
    this.maxHealth = health
    this.attacks = {
      slap: slap,
      punch: punch,
      kick: kick
    }
    this.hits = 0
    this.items = []
  }
  var ron = new Target("Ronald McGregorson", 120, 3, 7, 13)
  var rob = new Target("Rob McGregorson", 180, 0, 3, 8)

  function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
  };

  var items = {
    shield: new Item('Shield', -0.3, "This is a way cool shield"),
    crows: new Item("Crows", 0.5, "More CROWS!"),
    straw: new Item("Straw", -0.2, "Stronger straw"),
    fire: new Item("Fire", 1.6, "its super effective")
  };

  function addMods() {
    var total = 1;
    for (var index = 0; index < ron.items.length; index++) {
        var item = ron.items[index];
        total += item.modifier
    }
    return total
  };

  //public

  //attack('kick')
  this.attack = function attack(attackType){
    ron.health -= ron.attacks[attackType] * addMods()
  }

  this.giveItem = function giveItem(itemType){
    ron.items.push(items[itemType])
  }

  this.reset = function reset(){
    ron.health = ron.maxHealth
  }

  this.getHealth = function getHealth(){
    return ron.health
  }  

}