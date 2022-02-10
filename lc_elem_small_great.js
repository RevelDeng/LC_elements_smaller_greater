var countElements = function(nums) {
    var sorted = nums.sort((a, b) => a - b)
    var mid_count = 0
    for (let i = 1; i < sorted.length - 1; i++) {
        if (sorted[i] > sorted[0] && sorted[i] < sorted[sorted.length - 1]) {
            mid_count++
        }
    }
    return mid_count
};