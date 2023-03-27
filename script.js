class IvanInheritance {
    
    constructor() {
        this.age = 18
        this.evenMoney = 12000
        this.money
        this.oddMoney
    }

    totalInheritance(xMoney, year) {
        for (let tmachine = 1800; tmachine <= year; tmachine++) {
            this.oddMoney = 12000 + 50 * (this.age + (tmachine - 1800))
            this.money = (tmachine % 2 === 0) ? xMoney -= this.evenMoney : xMoney -= this.oddMoney        
        }
        
        let ans = (this.money >= 0) ?
            `Yes! He will live a carefree life and will have ${this.money.toFixed(2)} dollars left.` :
            `He will need ${Math.abs(this.money.toFixed(2))} dollars to survive.`
        
        return ans
    }

}

let newIvanInheritance = new IvanInheritance()
console.log(newIvanInheritance.totalInheritance(50000, 1802));
