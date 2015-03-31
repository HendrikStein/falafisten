Template.item.helpers({
  
  isHealthy: function() {
    if(this.kcal <= 150) {
      return true;
    }
    return false;
  },
  
  isHealthWarning: function() {
    if(this.kcal > 150 && this.kcal <500) {
      return true;
    }
    return false;
  },
  
  isHealthDangerous: function() {
    if(this.kcal >= 500) {
      return true;
    }
    return false;    
  },
    log: function () {
        alert(this.kcal);
        console.log(this);
    }
});