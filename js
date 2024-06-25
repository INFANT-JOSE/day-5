//QUESTION 1:

//EASY RESUME DATA IN JSON FARMAT

let resume={ 
    name         :'infant jose',
    DOB          : '01.09.2000',
    gender       :'male',
    nationality  :'INDIAN',
    maried_status:'single',
    languages_known:['tamil','english''],
    
}
console.log(resume);
//output=>{name: 'infant jose', DOB: '13.03.2006', gender: 'male', nationality: 'INDIAN', maried_status: 'single', …}
name            : "infant jose"
nationality     : "INDIAN"
DOB             : "13.03.2006"
gender          : "male"
languages_known : Array(4)
                 0: "tamil"
                 1: "english"
maried_status   : "single"



// QUESTION 2:
// JSON ITERATE USING FOR LOOP
 
let keys=['jose','ram','raymond','ravi','sam']
let values=[1,2,3,4,5]
let person={}
for(let i=0; i<keys.length;i++)
{
    person[keys[i]]=values[i]
}
// console.log(person);
//output=>{jose: 1, ram: 2, raymond: 3, ravi: 4, sam: 5}
//         jose:1
//         ram:2
//         raymond:3
//         ravi:4
//         sam:5

//JSON ITERATE USING FOR IN

const data={
    name:'jose',
    age :18,
    sex :'male'
}
for(let keys in data)
{
    // console.log(keys+":" ,data[keys])
}
//output name: jose
//       age: 18
//        sex: male

//JSON ITERATE USING FOREACH

let fav=['video','book','java','year'];
let items=['play','reader','script',2000];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
// console.log(solution);
//output=>{video: 'play', book: 'reader', java: 'script', year: 2000}//book: "reader
//java: "script"
//video: "play"
//year: 2000

//JSON ITERAITON USING FOR OF

let cars={'ford':1,'toyota':2,'honda':3,'volkswagen':'fav'}
let k= Object.keys(cars)
for(let i of k)
{
    console.log(`${i} : ${cars[i]}`);
}
//output=>ford : 1
//        toyota : 2
//        honda : 3
//        volkswagen : fav
