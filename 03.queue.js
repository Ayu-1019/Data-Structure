function Queue() {
  this.items = []

  // 向队尾添加一个元素
  Queue.prototype.enqueue = (element) => {
    this.items.push(element)
  }

  // 移除队头的元素
  Queue.prototype.dequeue = () => {
    this.items.shift()
  }

  // 返回队头元素
  Queue.prototype.front = () => {
    return this.items[0]
  }

  // 判空
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0
  }

  // 返回队列包含的元素个数
  Queue.prototype.size = () => {
    return this.items.length
  }

  // 将队列的内容转换为字符串的形式
  Queue.prototype.toString = () => {
    return this.items.join('')
  }
}

const queue = new Queue()

queue.enqueue('1')
queue.enqueue('2')
queue.enqueue('3')
queue.enqueue('4')
console.log(queue)

queue.dequeue()
console.log(queue)


console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())
