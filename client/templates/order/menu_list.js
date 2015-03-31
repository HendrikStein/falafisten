var menuData = [
  {
    title:'Falafel',
    description:'Leckere und gesunde Teigtasche',
    type:['vegan', 'vegetarisch'],
    ingredients:[
      {
        name:'Brot',
        kcal:150
      },
      {
        name:'Kichererbsen',
        kcal:300
      },
      {
        name:'Sauce',
        kcal:500
      }
    ]
  },
    {
    title:'Linsensuppe',
    description:'Leckere und gesunde Linsensuppe',
    type:['vegan', 'vegetarisch'],
    ingredients:[
      {
        name:'Linsen',
        kcal:150
      },
      {
        name:'Zitrone',
        kcal:50
      }
    ]
  }

];

Template.menu.helpers({
  menu: menuData
})