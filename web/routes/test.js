var data = [
    {y:"2011", item1: 2230},
    {y:"2012", item1: 2560},
    {y:"2013", item1: 2300}

]
var data1 =
[
    {y:"2011"},
    {y:"2012"},
    {y:"2013"}
]

var data2 =
[
    {item1:123},
    {item2:345},
    {item3:567}

]

var data3 = [data1.length]
for (i = 0;i<data1.length;i++)
{    console.log(data1[i])
     var hola = data1[i]
     var chao = data2[i]
     console.log(hola)
     data3[i].concat(',' + hola)
}
   
console.log(data[0]);
console.log(data3);

