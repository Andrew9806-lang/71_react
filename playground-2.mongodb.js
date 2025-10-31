use("drink_db");

db.user1.insertMany([
    {title:'coca-Cola',kkal:42,price:0.99,instock:true},
     {title:'7UP',kkal:49,price:0.50,instock:true},
      {title:'red-bull',kkal:50,price:1.50,instock:true},
       {title:'Jack-Daniels',kkal:70,price:24.57,instock:false},
          {title:'Orange-Juicy',kkal:60,price:3,instock:false},
]);

db.user1.find();
db.user1.find({instock:true});
db.user1.find({instock:false});

db.user1.find({},{price:1,title:1, _id: 0}).sort({price:-1}).limit(1);
db.user1.find({},{price:1,title:1, _id: 0}).sort(price:1).limit(3);
db.user1.find({},{kkal:1,title:1, _id: 0}).sort({kkal:-1}).limit(3);
db.user1.find({$and}:[{instock:true},{price:{$gt:0}}]).sort({price:-1});
db.user1.find({kkal:{$lt:50}});
db.user1.find({instock:{$in:[true]}});
db.user1.find({instock:{$in:[true]}});