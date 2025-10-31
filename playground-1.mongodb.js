// sozdanie  bazi dannih
use("lesson4_71");

// CRUD
// --CREATE sozdanie
// sozdanie(ispolzovanie kollekcii ) i sozdanie dokumenta-InsertOne
// db.user.insertOne({name:"Olga"});

// sozdanie neskolkih dokumentov
// db.user.insertMany([
//   { name: "Pavel", age: 17 },
//   { name: "Elena", age: 20, address: { city: "Berlin", postcode: "232432" } },
//   { name: "Denis", age: 34 },
//   { name: "Denis" },
//   { name: "Alex", age: 30 },
// ]);

// -- READ
// Vivesti vse dokumenti iz kollekcii
// db.user.find();

// vivesti tolko pervie dva documenta
// db.user.find().limit(2);

// vivod vse zapisi krome pervih dvuh propuskaem 2 elementa
// db.user.find().skip(2);

// vivesti dannie s sortirovkoi po imeni a..z 1 znachit
// po vozrastaniyu
// db.user.find().sort({name:1});

// v obratnom poryadke - 1 znachit po ubivaniyu
// db.user.find().sort({ name: -1 });

// vivesti dannie po vozrastaniyu vozrasta
// db.user.find().sort({age:1});

// po ubivanoioyu vorzast
// db.user.find().sort({ age: -1 });

// vivesti vse dannie s sortirovkami po imeni(
// v alvafitnom) i vozrastu(po ubivaniyu)
// db.user.find().sort({ name: 1, age: -1 });

// VIVESTI 3 samih starshih polzovatelei limit tolko 3
// db.user.find().sort({ age: -1 }).limit(3);

// naiti document(i) u kotorih znachenie svoistva name =
// ravno Denis
// db.user.find({name:"Denis"});

//  OPERATORI
// operator bolshe - $gt
// db.user.find({ age: { $gt: 20 } });

// operator menshe $lt
// db.user.find({age:{$lt:30}});

// operator bolshe ili ravno - $gte
// db.user.find({ age: { $gte: 20 } });

// operator menshe ili ravno - $lte
// db.user.find({ age: { $lte: 30 } });

// operator ravesntva - $eq
// db.user.find({ name: { $eq: "Olga" } });

// proverka na sootvestvie po odnome znacheniyu
// db.user.find({ name: { $in: ["Elena", "Olga", "Pavel"] } });

// proverka na ne sootvistvie iz znacheniy = $nin
// db.user.find({ name: { $nin: ["Elena", "Olga", "Pavel"] } });

// logicheskie operatori
// logicheskoe ili - $or
// db.user.find({ $or: [{ name: "Denis" }, { name: "Olga" }] });
// db.user.find({ $or: [{ name: "Denis" }, { name: "Olga" },{age:20}] });

// logicheskoe I = $and
// db.user.find({ $and: [{ name: "Denis" }, { age: 34 }] });

// logicheskoe nw - $not
// db.user.find({ name: { $not: { $eq: "Denis" } } });

// vivod opredelennih svoistv documentov to est libo vozrast
// db.user.find({ name: "Denis" }, { age: 1 });

// db.user.find({ name: "Denis" }, { age: 1, _id: 0 });
// // vse documenti
// db.user.find({}, { _id: 0 });
//  1 eto viborka a vtoroe uslovie
db.user.find({}, { name: 1, age: 1, _id: 0 });
db.user.find({}, { adress:0, _id: 0 });


