//Controller Responsibilities
  //user controlls, interactions between the data and the user
  //Draw function
  //giveItem
  //reset
  //attack


  function SlapController(){
    //private
    var slapService = new SlapService()

    function draw(){
      var healthElem = document.getElementById('health')
      healthElem.innerHTML = slapService.getHealth()
    }

    //public
    this.giveItem = function giveItem(itemType){
      slapService.giveItem(itemType)
    }

    this.attack = function attack(attackType){
      slapService.attack(attackType)
      draw()
    }  

    this.reset = function reset(){
      slapService.reset()
      draw()
    }

  }