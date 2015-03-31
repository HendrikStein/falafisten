var menuData = [
  {
    title:'Falafel',
    description:'Leckere und gesunde Teigtasche',
    type:['vegan', 'vegetarisch'],
    ingredients:[
      {
        name:'Brot',
        amount: 1,
        kcal:150
      },
      {
        name:'Kichererbsen',
        amount:3,
        kcal:50
      }
    ]
  }
];

Template.menu.helpers({
  menu: menuData
})