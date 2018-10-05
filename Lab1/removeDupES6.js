Object.defineProperty(Array.prototype,'remove_duplicates',{ enumerable: false, value:function() {
    let s = new Set(this);
    let it = s.values();
    return Array.from(it);
} });
['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'].remove_duplicates();