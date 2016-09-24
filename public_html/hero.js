
hero={
  'hp' : 1000,
  'att' : 20,
  'def' : 10,

  'gold' : 0,
  'ex' : 0,

  'key' : 0,
  'keyr' : 0,
  'keyb' : 0,

  'x' : 5,
  'y' : 9,

  sucaix:8,
  sucaiy:16,

  target:new Array(),

  battleif:false
}

//==================================移动
function heroWalk(direction){
  if(hero.battleif){
    console.log('站好别动');
    return;
  }
  var xx=hero.x;
  var yy=hero.y;

  switch (direction){
    case "w": yy--; break;
    case "a": xx--; break;
    case "s": yy++; break;
    case "d": xx++; break;
  }
  hero.target["x"]=xx;
  hero.target["y"]=yy;
  if (mapNow[yy][xx]=="e")        //移动
  {
    hero.x=xx;  hero.y=yy;
    //mapNow[yy][xx]="hero";
  }
  else if(mapNow[yy][xx].indexOf("s")==0) //楼梯
  {
    if((mapNow[yy][xx])=="su"){
      gostairs(mapNowLou+1,"su");
    } else {
      gostairs(mapNowLou-1,"sd");
    }
  }
  else if (mapNow[yy][xx]=="w")     //撞墙
  {}
  else if (mapNow[yy][xx].indexOf("d") == 0) {  //门
    if (openDoor(mapNow[yy][xx])) {
      mapPointChange(xx,yy,'e');
      console.log(yy,xx);
    } else {
      console.log('mei');
    }
  }
  else if (mapNow[yy][xx].indexOf('i') == 0) {//遇物品
    getItem(mapNow[yy][xx]);
    mapPointChange(xx,yy,'e');
  }
  else if (mapNow[yy][xx].indexOf('m') == 0) {//遇怪
    //if(heroBattle(mapNow[yy][xx]))
    //  mapNow[yy][xx]='e';
    trunBased (mapNow[yy][xx],mapNowId[yy][xx]);
  }
  else if (mapNow[yy][xx].indexOf('j') == 0) {  //交易
    goMarket();
  }

  //$("mapinfo").innerHTML=map1[5]
  showmap();
  showHeroInfo();
}
//=================================================================获得物品
function getItem(item1) {        //获得物品
  switch(item1) {
      case "ik":
        hero.key++; break;
      case "ikr":
        hero.keyr++; break;
      case "ikb":
        hero.keyb++; break;
    }
  }
//===================================================================门
function openDoor(door) {
  switch (door) {
    case "d":
      if(hero.key){hero.key--; return true;}
      else  return false;
      break;
    case "dr":
      if (hero.keyr) {
        hero.keyr--; return true;
      }
      else return false;
      break;
    case "db":
      if (hero.keyb) {
        hero.keyb--; return true;
      }
      else return false;
      break;
    }
  }
//============================================================自动战斗
function heroBattle(monster1) {
  var monster = eval(monster1);
  //alert(monster);
  var mhp = monster.hp;
  var hhp = hero.hp;

  while (mhp > 0 && hhp > 0) {
    if (fmhp = hero.att-monster.def) //当攻击高于防御时HP减少
      mhp = mhp-fmhp;
    if (mhp>0) {
      if (fhhp = monster.att-hero.def)
        hhp = hhp-fhhp;
    }
  }

  if (mhp<0) {
    hero.hp = hhp;
    return true;
  }
}
//=========================================================回合制战斗
function trunBased(monster1,picid) {
  var monster = eval(monster1);
  hhp = hero.hp; hatt=hero.att; hdef=hero.def;
  mhp = monster.hp;
  matt = monster.att;
  mdef = monster.def;
  mgold = monster.gold;
  mex = monster.ex;
  mhead = picid;
  showBattlefield();
  if (zidong) {
    zidongzhan();
  }
}

//====================================================上下楼
function gostairs(louceng,upordown) {
  mapChange(louceng);
  var x = 0;
  var y = 0;
  var ii = 0;
  if(upordown == "su"){
    while(y < mapNow.length) {
      x = 0;
      while(x < mapNow.length) {
        if( mapNow[y][x] == "sd"){
          hero.x = x;
          hero.y = y;
        }
        x++;
      }
      y++;
    }
  } else if (upordown == "sd"){
    while(y < mapNow.length) {
      x = 0;
      while(x < mapNow.length) {
        if(mapNow[y][x] == "su") {
          hero.x = x;
          hero.y = y;
        }
        x++;
      }
      y++;
    }
  }
  showmap();
}


//======================================================显示英雄信息
function showHeroInfo(){
  $("heroxy").innerHTML=hero.x+"-"+hero.y;
  $("heroinfo").innerHTML="<div>HP:"+hero.hp+"<br/>ATT:"+hero.att+"<br/>DEF:"+hero.def+"<br/>GOLD:"+hero.gold+"<br/>EX:"+hero.ex+"</div>"+
    "<div style='width:32px; height:32px; background:url(pic/mota2.png) -192px -64px; float:left'></div>:"+hero.key+"<div style='clear:both'></div>"+
    "<div style='width:32px; height:32px; background:url(pic/mota2.png) -256px -64px; float:left'></div>:"+hero.keyb+"<div style='clear:both'></div>"+
    "<div style='width:32px; height:32px; background:url(pic/mota2.png) -224px -64px; float:left'></div>:"+hero.keyr;
}
