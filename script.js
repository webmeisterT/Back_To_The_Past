function totalInheritance(xMoney, year) {
    let age = 18
    let evenMoney = 12000
    let money = oddMoney = 0

    for (let tmachine = 1800; tmachine <= year; tmachine++) {
        oddMoney = 12000 + 50 * (age + (tmachine - 1800))
        money = (tmachine % 2 === 0) ? xMoney -= evenMoney : xMoney -= oddMoney        
    }
    
    return ans = (money >= 0) ?
        `Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.` :
        `He will need ${Math.abs(money.toFixed(2))} dollars to survive.`
    
}

console.log(totalInheritance(50000, 1802))