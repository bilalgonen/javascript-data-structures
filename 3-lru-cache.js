class LRU {
  constructor(max = 10) {
    this.max = max
    this.cache = new Map()
  }

  get(key) {
    let item = this.cache.get(key)
    if (item !== undefined) {
      // refresh key
      this.cache.delete(key)
      this.cache.set(key, item)
    }
    return item
  }

  set(key, val) {
    // refresh key
    if (this.cache.has(key)) this.cache.delete(key)
    // evict oldest
    else if (this.cache.size === this.max) this.cache.delete(this.first())
    this.cache.set(key, val)
  }

  first() {
    return this.cache.keys().next().value
  }
}

const cache = new LRU(2)
cache.set(1, 'v:' + 1)
cache.set(2, 'v:' + 2)
cache.set(3, 'v:' + 3)
console.log(cache)
// console.log(cache.get(2))
