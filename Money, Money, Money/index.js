function calculateYears(principal, interest, tax, desired) {
    const years = []
    let income
    let taxation
    if (principal == desired) {
        return 0
    } else {
        for (let i = 0; i < principal; i++) {
            income = principal * interest // 50
            taxation = income * tax // 9
            principal = principal + income - taxation
            years.push(i + 1)

            if (principal >= desired) {
                return years[years.length - 1]
            }
        }
    }
}