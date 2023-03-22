function fruitsCalculator (mangoquantity,lichiquantity,orangequantity){
    const perMango = 5;
    const perLichi = 2;
    const perOrange = 10;
    

    const totalMango = mangoquantity*perMango;
    const totalLichi = lichiquantity*perLichi;
    const totalOrange = orangequantity*perOrange;
     

    total = totalMango + totalLichi + totalOrange;
    return total;
}
const totalFruits = fruitsCalculator(10,20,5);
console.log('total fruits required',totalFruits);