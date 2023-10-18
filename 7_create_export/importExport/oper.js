const add =(a,b)=>{
    return a+b;
};


const sub =(a,b)=>{
    return a-b;
};

const multiply =(a,b)=>{
    return a*b;
};
const name = "Rahul Tyagi"
module.exports=name

module.exports.add =add;
module.exports.sub =sub;
module.exports.multiply =multiply;

module.exports={add,sub,multiply,name}


