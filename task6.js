let animalsGroups = [
    ["dog","fish","snake"],
    ["chicken","lizard","whale"]
];

for (let i= 0; i <animals.lenght; i++){
    let matches =0;

}

for (let j = 0; j< animalsGroups[i].length; i++){
    if(animalsGroups[i][j].startsWith("c")){

        matches++
    }else {
        continue;
    }

if(matches===2){
    console.log("two animals have the same first later")
    console.log(animalsGroups[i]);
    break;}
}