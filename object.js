let e = {
    a: 10.4,
    b: true,
    c: "Hello",
    d: function () {
        console.log("Hello");
    },
    f: {
        x: 10,
        y: 30
    }

};

// console.log(typeof e);
// console.log(e.a);
// console.log(e.f.y);
// e.d()

let f = [12,23,1.2,"hello"];
// console.log(typeof f);
// console.log(Array.isArray(f))
// console.log(f.length);
// f.forEach(element => {
//     console.log(element);
// });

for (let i = 0;i<f.length;i++){
    console.log(f[i]);
}