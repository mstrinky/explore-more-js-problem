
function removeDuplicate(names){
    const unique = [];
    for (let i=0; i<names.length; i++){
        var name  = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const friendsName = ['jesmin','nilu','salu','eti','salu','nilu','sumai'];
const declare = removeDuplicate(friendsName);
console.log(declare);