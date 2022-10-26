let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }]



    let beds=hospitals.filter(ele=>{
        return ele.noOfBeds >200;
    })

console.log(beds);
    let avail=hospitals.filter(ele=>{
        return ele.availability=="Yes";
    })
console.log(avail);
    let local=hospitals.filter(ele=>{
        return ele.location=="Pune";
    })
console.log(local);
