const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1); 

console.log(sym1 === sym2);
console.log(sym3 === sym4);

const user = {
    email : "yimcha2y0ung@gmail.com",
    name : "임채영",
    favorite : ["초밥", "케이크"],
    introduce : function() {
        console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods : function() {
        this.favorite.forEach((food) => {
            console.log(`${food} 맛있어`);
        });
    },
};

const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "우와!", false, { sopt: "Server" });

arr1.map((item) => console.log("item1 :", item));
arr2.map((item) => console.log("item2 :", item));

const add = (a, b) => a + b;
const hello = name => console.log(`${name}, hello!`)
const info = (name, age) => ({name, age})