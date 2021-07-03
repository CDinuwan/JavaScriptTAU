const cookie={
    name:"Chocolate chip",
    isGlutenFree:false,
    "+Yummy":true,
    eatCookie:function(){
        console.log("I am eating "+this.name);
    }
};
cookie.name="Chip chocolate";
cookie.isGlutenFree=true;
console.log(cookie);
console.log(cookie.name); 
console.log(cookie["+Yummy"]);

class Cookie{
    constructor(name,isGlutenFree){
        this.name=name;
        this.isGlutenFree=name;
    }

    eatCookie(){
        console.log("I am eating "+this.name);
    }
}

const myCookie=new Cookie("Iced Oatmeal",false);

console.log(myCookie["name"]);
myCookie.eatCookie();