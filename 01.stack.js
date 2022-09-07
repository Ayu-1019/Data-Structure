export function Stack() {
  this.items = []

  // 1.将元素压入栈
  Stack.prototype.push = (element) => {
    this.items.push(element)
  }

  // 2.从栈中取出元素
  Stack.prototype.pop = () => {
    return this.items.pop()
  }

  // 3.查看栈顶元素
  Stack.prototype.peek = () => {
    return this.items[this.items.length - 1]
  }

  // 4.判断栈是否为空
  Stack.prototype.isEmpty = () => {
    return this.items.length === 0
  }

  // 5.获取栈中元素的个数
  Stack.prototype.size = () => {
    return this.items.length
  }

  // 6.toString方法
  Stack.prototype.toString = () => {
    return this.items.join('')
  }
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
console.log(s);
console.log(s.pop());
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
console.log(s.toString());
