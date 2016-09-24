/*
mSg.hp=50;	mSg.att=20;	mSg.def=1; mSg.gold=5; mSg.ex=5;
mSr.hp=70;	mSr.att=15;	mSr.def=2; mSr.gold=6; mSr.ex=6;
*/
function monster(hp,att,def,ex,gold) {
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.ex = ex;
  this.gold = gold;
  return this;
}

mslimegreen = new monster(50,20,5,5,4);
mslimered = new monster(50,20,20,22,33);
mslimeblack = new monster(50,5,5,5,4);
mbatsmall = new monster(50,5,5,5,4);
mwizardblue = new monster(50,5,5,5,4);
mwizardred = new monster(50,5,5,5,4);
marmoryellow = new monster(50,5,5,5,4);
marrmorblue = new monster(50,5,5,5,4);
mskeleton = new monster(50,5,5,5,4);


arrId[1] = "d";
arrId[2] = "db";
arrId[3] = "dr";
arrId[4] = "dg";
arrId[6] = "e";
arrId[8] = "w";
arrId[11] = "su";
arrId[12] = "sd";
arrId[29] = "ik";
arrId[30] = "ikr";
arrId[31] = "ikb";
arrId[61] = "mslimegreen";
arrId[63] = "mslimered";
arrId[65] = "mslimeblack";
arrId[67] = "mbatsmall";
arrId[69] = "mwizardblue";
arrId[71] = "mwizardred";
arrId[73] = "marmoryellow";
arrId[75] = "marrmorblue";
arrId[77] = "mskeleton";
arrId[189] = "hero";