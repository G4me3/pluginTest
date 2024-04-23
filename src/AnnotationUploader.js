import { content } from "./AnnotationExportDialog";

export function uploadAnnotations(){
    console.log(content);
//     fetch('test.php', 
//     {
//         method: 'POST', // HTTP-メソッドを指定
//         headers: { 'Content-Type': 'application/json' }, // jsonを指定
//         body: JSON.stringify(content),
//     }
// ) 
// .then(response => response.json())
// .then(res => {
//     console.log({res});
// })
// .catch(error => {
//     // エラー発生の場合の catch & console出力
//     console.log({error});
// });

const fs = require("fs");
const originalJson = JSON.parse(fs.readFileSync("./manifest1.json", "utf-8"));

content.items.forEach((item) => {
    //remove <p> tag from json value
    item.body.value = item.body.value.replace(/<p[^>]*>(.*?)<\/p>/g, "$1");
    
    //modify "target" value
    item.target = item.target.source + "#" + item.target.selector[0].value;
    originalJson.items[0].annotations[0].items.push(item);
});

console.log(originalJson.items[0].annotations[0].items);

fs.writeFileSync("./manifest1.json", JSON.stringify(originalJson))
}