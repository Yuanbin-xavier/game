function goMarket() {
  if($('market')) {

  } else {
      var market = document.createElement('div');
      market.style = 'width:100%; height:100%; background:#cccdcf; position:absolute; top:0; left:0; z-index:99';
      $('mapCenter').appendChild(market);
    }
}
function shopping(heroattribute,attributevalue,money) {
  if(hero.money - money >= 0){
    var str = "hero." + heroattribute + "+=" + attributevalue;
    eval(str);
    hero.money -= money;
  }
}