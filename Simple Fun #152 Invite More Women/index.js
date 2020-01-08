function inviteMoreWomen(L) {
    //coding and coding...
    const men = [];
    const women = [];

    for (let i = 0; i < L.length; i++) {

        if (L[i] > 0) {
            men.push(L[i])
        } else {
            women.push(L[i])
        }
    }

    if (men.length === women.length || women.length > men.length) {
        return false
    } else {
        return true
    }
}