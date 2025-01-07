use ititaske__one__

[{
  "_id": 1,
  "status": "D",
  "lastModified": {
    "$date": {
      "$numberLong": "1670062412915"
    }
  },
  "age": 62,
  "cancellation": {
    "date": {
      "$timestamp": {
        "t": 1670062412,
        "i": 1
      }
    },
    "reason": "user request"
  }
},{
  "_id": 2,
  "qty": 500,
  "age": 3
},{
  "_id": 110,
  "lastModified": {
    "$date": {
      "$numberLong": "1670002910790"
    }
  },
  "name": "updated",
  "age": 3
},{
  "_id": 120,
  "default": "default added",
  "lastModified": {
    "$date": {
      "$numberLong": "1670008010323"
    }
  },
  "qty": 1,
  "employeeAge": 30
},{
  "_id": 5,
  "status": "x",
  "name": "eman",
  "age": 3
},{
  "_id": 15,
  "status": "abc",
  "name": "replaced",
  "add": "alex",
  "age": 2
},{
  "0": {
    "status": "A",
    "name": "Ali",
    "age": 10
  },
  "1": {
    "age": 15
  },
  "2": {
    "age": 20
  },
  "_id": {
    "$oid": "638b1589b6498567c685ac4e"
  },
  "age": 3
},{
  "_id": {
    "$oid": "638b1da08acb81bc794a16a9"
  },
  "employeeAge": 30
}]
////////////////////////////////q1////////////////////////////////
/////Create a Collection named "Staff".
//db.createCollection("staff")
/////////////////////////////////////////////////////////////////
db.createCollection("Staff")


////////////////////////////////q2////////////////////////////////
/////Insert one document into the "Staff" collection: {_id, name, age, gender, department}
//
/////////////////////////////////////////////////////////////////
db.Staff.insertOne({ 
_id : 1, 
"name": "youssef hussain mahdy", 
"age": 23, 
"gender": "male",
"department" : "ai" 
}); 

////////////////////////////////q3////////////////////////////////
/////Insert many documents into the "Staff" collection:
//•	   Object: {_id, name, age: 20, gender: "male", department}
//•	   Object: {_id, name, age: 25, gender: "female", managerName, department}
//•	   Object: {_id, name, age: 15, gender, DOB}
/////////////////////////////////////////////////////////////////
db.Staff.insertMany(
[
{ 
_id : 2, 
"age": 20, 
"gender": "male",
"department" : "ai" 
},
{ 
_id : 3, 
"age": 25, 
"gender": "female",
"managerName":"youssef",
"department" : "ai" 
},
{ 
_id : 4, 
"DOB": "DOB", 
"age": 15, 
"gender": "male",
"department" : "ai" 
}
]
); 
////////////////////////////////q4////////////////////////////////
/////Find documents where age is 20 and gender is "female".
/////////////////////////////////////////////////////////////////
db.Staff.find({
  "$and": [
    {"age": 15},
    {"gender": "male"}
  ]
});
////////////////////////////////q5////////////////////////////////
/////Find documents where the "tags" field exists and show just name and age. 
/////////////////////////////////////////////////////////////////
db.Staff.insertOne({ 
_id : 10, 
"name": "youssef hussain mahdy", 
"tags":"you",
"age": 23, 
"gender": "male",
"department" : "ai" 
}); 
db.Staff.find(
  {
    "tags": {
      "$exists": true
    }
  },
  {
    "name": 1,
    "age": 1,
    "_id":0
  }
);

////////////////////////////////q6////////////////////////////////
/////Find documents where the "status" field has a value in [A, B] using both the $in , $or operators.
/////////////////////////////////////////////////////////////////
db.Staff.insertOne({ 
_id : 11, 
"name": "youssef hussain mahdy", 
"tags":"you",
"age": 23, 
"gender": "male",
"department" : "ai",
"status":"A" 
});
db.Staff.find({
  "status": {
    "$in": ['A', 'B']
  }
});

db.Staff.find({
  "$or": [
    {"status": 'A'},
    {"status": 'B'}
  ]
});
////////////////////////////////q7////////////////////////////////
/////Find documents where the "tags" array contains all of the values [ssl, security] using the $all operator.
/////////////////////////////////////////////////////////////////
db.Staff.insertOne({ 
"name": "youssef hussain mahdy", 
"tags":"you",
"age": 23, 
"gender": "male",
"department" : "ai",
"status": ['ssl', 'security',"m"] 
});
db.Staff.find({
  "status": {
    "$all": ['ssl', 'security']// al
  }
});

////////////////////////////////q8////////////////////////////////
/////Update many documents in the "Staff" collection, setting the department to "AI"
//
//Bonus1) ..Try update operators like $inc, $min, $max, and $mul to modify document fields.
//
//Bonus 2).. Update the "item" field in the "paper" document, setting "size.uom" to "meter" and using the $currentDate operator.
//and, use the upsert option and  Use the $setOnInsert

/////////////////////////////////////////////////////////////////
db.Staff.updateMany(
  {},  // Match all documents
  {
    $set: { "department": "AI" }
  }
);
//{
//    "acknowledged" : true,
//    "insertedId" : null,
//    "matchedCount" : 10.0,
//    "modifiedCount" : 10.0,
//    "upsertedCount" : 0.0
//}
db.Staff.insertOne({ 
  _id: 200,
  "s1": 1, 
  "s2": 10,
  "s3": 10,
  "s4": 10,
  "s5": 10
}); 

db.Staff.updateMany(
  {_id: 200},
  {
    $inc: { "s1": 1 },
    $min: { "s2": 221 },
    $max: { "s3": 221 },
    $mul: { "s4": 221 }
  }
);

db.Staff.find({_id:200
});
//{
//    "_id" : NumberInt(200),
//    "s1" : NumberInt(2),
//    "s2" : NumberInt(10),
//    "s3" : NumberInt(221),
//    "s4" : NumberInt(2210),
//    "s5" : NumberInt(10)
//}

/////////////////////////
db.paper.updateOne(
  { "item": "paper" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { "lastModified": true }
  },
  { upsert: true }  
);
db.paper.find({})
db.paper.updateOne(
  { "item": "pper" },
  {
    $set: { "size.uom": "metr" },
    $setOnInsert: { "createdAt": new Date() },
    $currentDate: { "lastModified": true }
  },
  { upsert: true }  
);

//////////////////////////////////////////////////lab 2
//////////// Find documents with age between 20 and 25
///////////////////////////////q1
db.Staff.find({ age: { $gte: 20, $lte: 25 } })


//////////////////////////////////////////////////q2
//////////// Update one document in the "Staff" collection where age is 15
///////////////////////////////
db.Staff.updateOne({ age: 15 }, { $set: { name: "new student" } })

//////////////////////////////////////////////////q3
//////////// Create a new collection called "test" and insert documents from part 1 query
///////////////////////////////
db.test.insertMany(db.Staff.find({ age: { $gte: 20, $lte: 25 } }).toArray())
db.test.find({})
// .toArray() conver to arr

//////////////////////////////////////////////////q4
//////////// Delete one document from the "test" collection where age is 15
///////////////////////////////
db.test.deleteOne({ age: 15 })

//////////////////////////////////////////////////q5
////////////Delete all male gender
///////////////////////////////
db.test.deleteMany({ gender: "male" })
db.test.find({})

//////////////////////////////////////////////////q6
//////////// Delete all documents in the "test" collection
///////////////////////////////
db.test.deleteMany({})
db.test.find({})


//////////////////////////////////////////////////q7
//////////// Find documents where the "tags" field does not contain values "ssl" or "security"
///////////////////////////////
db.test.find({ tags: { $nin: ["ssl", "security"] } })
db.test.find({})

//////////////////////////////////////////////////q8
//////////// Find documents where the "qty" field is greater than 95
///////////////////////////////
db.test.find({ qty: { $gt: 95 } })
db.test.find({})

//////////////////////////////////////////////////q9
//////////// Find documents where the "tags" array has a size of 3
///////////////////////////////
db.test.find({ $expr: { $eq: [{ $size: "$tags" }, 3] } })
db.test.find({})

//////////////////////////////////////////////////q10
////////////Find documents where the "tags" field is of type array
///////////////////////////////
db.test.find({ tags: { $type: "array" } })
db.test.find({})