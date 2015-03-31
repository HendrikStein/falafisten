Template.menuItem.helpers({
  
  isHealthy: function(kcal) {
    if(kcal <= 150) {
      return true;
    }
    return false;
  },
  
  isHealthWarning: function(kcal) {
    if(kcal == 300) {
      return true;
    }
    return false;
  },
  
  isHealthDangerous: function(kcal) {
    if(kcal == 500) {
      return true;
    }
    return false;    
  }
})