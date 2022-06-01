function filterCourses(arr, range) {
    function filt(cours) {
        if (cours.prices[0] <= range[1] || range[1] === null) {
            if (cours.prices[1] >= range[0] || cours.prices[1] === null)
                return true
        }
        return false
    }
    return arr.filter(filt);
}
