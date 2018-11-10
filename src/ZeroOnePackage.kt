import kotlin.math.max

class ZeroOnePackage {

    val weight = intArrayOf(0, 2, 3, 4, 5, 9)
    val value = intArrayOf(0, 3, 4, 5, 8, 10)
    lateinit var a: Array<IntArray>

    fun getMaxValue(itemCount: Int, maxWeight: Int) {
        a = Array(itemCount+1){IntArray(maxWeight+1)}
        for (i in 0..itemCount) {
            a[i][0] = 0
        }
        for (i in 0..maxWeight) {
            a[0][i] = 0
        }
        for (i in 1..itemCount) {
            for (w in 1..maxWeight) {
                val wi = weight[i]
                if (wi > w) {
                    a[i][w] = a[i-1][w]
                } else {
                    a[i][w] = max(a[i-1][w], a[i-1][w-wi] + value[i])
                }
            }
        }
        print(a[itemCount][maxWeight])
    }
}