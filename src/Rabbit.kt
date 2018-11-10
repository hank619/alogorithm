class RabbitBorn {

    val pairs = mutableListOf<RabbitPair>()

    fun count(month: Int) {
        pairs.clear()
        pairs.add(RabbitPair())
        for (i in 1..month) {
            val tempList = mutableListOf<RabbitPair>()
            pairs.forEach {
                val newBorn = it.giveBirth()
                newBorn?.let {
                    tempList.add(newBorn)
                }
            }
            pairs.addAll(tempList)
            System.out.println(pairs.size)
        }
    }
}

class RabbitPair {
    private var dayLeft: Int = 10

    fun giveBirth(): RabbitPair? {
        if (dayLeft > 0) dayLeft--
        return if (dayLeft <= 0) {
            dayLeft += 3
            RabbitPair()
        } else {
            null
        }
    }
}