
/*

fast recap on data structure and there code

                            {((OBJECTS))}

1- ARRAY
2- LINKED LIST -> ( singly linked list & doubly linked list )                            
3- STACKS & QUEUS
4- TREES -> ( binary search tree & tree traversal )
5- HEAPS -> ( binary heaps )
6- TRIES
7- HASH TAPLES
8- GRAPHS -> ( graph traversal )

*/

(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)

                                        ARRAYS

/*

**ARRAY**

 data structure هي عباره عن نوع من انواع ال
 index فيها بنخزن بيانات من نفس النوع بشكل متتالي وبنقدر نوصل لكل عنصر عن طريق ال 
length - 1 بيبدا من صفر وبينتهي ب  index ال 
ب واحد index اكبر من ال length يعني دايما ال 

*/

ARRAY_code

/*

class MyArray {

    constructor(){
        this.data = {} ;
        this.length = 0 ;
    }
    
    push(item){
        this.data[this.length] = item ;
        this.length++ ;
    }

    get(index){
        if(this.length === 0){
            return undefined ;
        }
        return this.data[index] ;
    }

    pop(){
        if(this.length === 0){
            return undefined ;
        }
        delete this.data[ this.length - 1 ] ;
        this.length-- ;
    }

    shift(){
        if(this.length === 0){
            return undefined ;
        }
        delete this.data[0] ;
        this.length-- ;
    }
   
  unshift(element) {
    const temp = {};
    temp[0] = element;
    for (let i = 0; i < this.length; i++) {
      temp[i + 1] = this.data[i];
    }
    this.data = temp;
    this.length++;
    return this.length;
  }

// unshift  طريقه تانيه لل 

unshift(element) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = element;
    this.length++;
    return this.length;
  }

    
  indexOf(element) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }
    return -1;
  }

  slice(start, end) {
    const result = new MyArray();
    for (let i = start; i < end && i < this.length; i++) {
      result.push(this.data[i]);
    }
    return result;
  }

  splice(start, deleteCount, ...items) {
    const removedItems = new MyArray();
    for (let i = 0; i < deleteCount; i++) {
      removedItems.push(this.data[start + i]);
    }

    const newData = {};
    let newLength = 0;

    for (let i = 0; i < start; i++) {
      newData[newLength++] = this.data[i];
    }

    for (let i = 0; i < items.length; i++) {
      newData[newLength++] = items[i];
    }

    for (let i = start + deleteCount; i < this.length; i++) {
      newData[newLength++] = this.data[i];
    }

    this.data = newData;
    this.length = newLength;

    return removedItems;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, this);
    }
  }

  map(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i], i, this));
    }
    return result;
  }

  filter(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  reduce(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this.data[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this.data[i], i, this);
    }

    return accumulator;
  }

  concat(array) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this.data[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array.data[i]);
    }

    return result;
  }

}

*/

THE_BIG_O_>>(ARRAY)

/*

Access: O(1)

Search: O(n)

Insertion: لو هتضيف من الاخر او من النص O(1) لو هتضيف من قدام و O(n)

Deletion: O(n) 

*/

(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)(2)

                                        LINKED_LIST

/*

**LINKED_LIST**

psudo code for SinglyLinkedList:-

singly linked list => length , head (index 0) , tail (index length - 1) 
node => val , next 
methods => push , pop , shift , unshift , get , set , insert , remove , reverse , print

*/

SINGLY_LINKED_LIST_CODE

/*

class Node {
    constructor(val) {
        this.val = val ; 
        this.next = null ; 
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null ; 
        this.tail = null ; 
        this.length = 0 ;
    }

    // إضافة عنصر إلى نهاية القائمة

    push(val) {
        const newNode = new Node(val) ;
        if (!this.head) {
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            this.tail.next = newNode ;
            this.tail = newNode ;
        }
        this.length++ ;
        return this ;
    }

    // حذف عنصر من نهاية القائمة

    pop() {
        if (!this.head) return undefined ;
        let current = this.head ;
        let newTail = current ;
        while (current.next) {
            newTail = current ;
            current = current.next ;
        }
        this.tail = newTail ;
        this.tail.next = null ;
        this.length-- ;
        if (this.length === 0) {
            this.head = null ;
            this.tail = null ;
        }
        return current ;
    }

    // pop طريقتي انا في ال

    pop() {
        if (!this.head) {
        return undefined;
    }
    if (this.head === this.tail) {
        let dn = this.head;
        this.tail = this.head = null;
        this.length = 0;
        return dn;
    }
    let node = this.head;
    for (let i = 0; i < this.length - 1; i++) {
        if (node.next === this.tail) {
            this.tail = node;
            let dn = node.next;
            node.next = null;
            this.length--;
            return dn;
        }
        node = node.next;
    }
}

    // إضافة عنصر إلى بداية القائمة

    unShift(val) {
        const newNode = new Node(val) ;
        if (!this.head) {
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            newNode.next = this.head ;
            this.head = newNode ;
        }
        this.length++ ;
        return this ;
    }

    // حذف عنصر من بداية القائمة

    shift() {
        if (!this.head) return undefined ;
        const removedHead = this.head ;
        this.head = this.head.next ;
        this.length-- ;
        if (this.length === 0) {
            this.tail = null ;
        }
        return removedHead ;
    }

    // الحصول على عنصر بناءً على الفهرس

    get(index) {
        if (index < 0 || index >= this.length) return null ;
        let current = this.head ;
        for (let i = 0; i < index; i++) {
            current = current.next ;
        }
        return current ;
    }

    // تعيين قيمة عنصر بناءً على الفهرس

    set(index, val) {
        const foundNode = this.get(index) ;
        if (foundNode) {
            foundNode.val = val ;
            return true ;
        }
        return false ;
    }

    // إدراج عنصر في موقع معين

    insert(index, val) {
        if (index < 0 || index > this.length) return false ;
        if (index === 0) return this.unShift(val) ;
        if (index === this.length) return this.push(val) ;
        const newNode = new Node(val) ;
        const previousNode = this.get(index - 1) ;
        const temp = previousNode.next ;
        previousNode.next = newNode ;
        newNode.next = temp ;
        this.length++ ;
        return true ;
    }

    // insert طريقه اسهل لل  

    insert(index, val) {
        if (index < 0 || index > this.length) return false ;
        if (index === 0) return this.unShift(val) ;
        if (index === this.length) return this.push(val) ;
        const newNode = new Node(val) ;
        const previousNode = this.get(index - 1) ;
        newNode.next = previousNode.next ;
        previousNode.next = newNode ;
        this.length++ ;
        return true ;
    }

    // حذف عنصر بناءً على الفهرس

    remove(index) {
        if (index < 0 || index >= this.length) return false ;
        if (index === 0) return this.shift() ;
        if (index === this.length - 1) return this.pop() ;
        const previousNode = this.get(index - 1) ;
        const removedNode = previousNode.next ;
        previousNode.next = removedNode.next ;
        this.length-- ;
        return true ;
    }

    // عكس ترتيب القائمة

    reverse() {
        if (this.length === 0) return ;
        let current = this.head ;
        let previous = null ;
        let next = null ;
        this.tail = this.head ; 
        while (current) {
            next = current.next ;
            current.next = previous ;
            previous = current ; 
            current = next ;
        }
        this.head = previous ;
    }

    // reverse طريقتي انا لل
    // O(n) انما الطريقه التانيه O(n^2) الطريقه دي 

    reverse(){
         for(var i = this.length - 1 ; i >= 1 ; i--){
             if(i == 0) break ;
             this.get(i).next = this.get(i - 1) ;
         }
         this.head = this.get(this.length -  1) ;
         this.tail = this.get(0) ;
         this.tail.next = null ;
     }

    // طباعة القائمة

    print() {
        const arr = [] ;
        let current = this.head ;
        while (current) {
            arr.push(current.val) ; 
            current = current.next ; 
        }
        console.log(arr) ; 
    }
}

*/

THE_BIG_O_>>(SINGLY_LINKED_LIST)

/*

Access: O(n)

Search: O(n)

Insertion: لو هتضيف من الاخر او من النص O(n) لو هتضيف من قدام و O(1)

Deletion: لو هتحذف من الاخر او من النص O(n) لو هتحذف من قدام و O(1)

*/

DOUBELY_LINKED_LIST_CODE

/*

class Node {
    constructor(val) {
        this.val = val ;
        this.next = null ;
        this.prev = null ;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null ;
        this.tail = null ;
        this.length = 0 ;
    }

    push(val) {
        const newNode = new Node(val) ;
        if (!this.head) {
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            newNode.prev = this.tail ;
            this.tail.next = newNode ;
            this.tail = newNode ;
        }
        this.length++ ;
        return this ;
    }

    pop() {
        if (!this.head) return undefined ;
        const removedTail = this.tail ;
        if (this.length === 1) {
            this.head = null ;
            this.tail = null ;
        } else {
            this.tail = removedTail.prev ;
            this.tail.next = null ;
            removedTail.prev = null ;
        }
        this.length-- ;
        return removedTail ;
    }

    unShift(val) {
        const newNode = new Node(val) ;
        if (!this.head) {
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            newNode.next = this.head ;
            this.head.prev = newNode ;
            this.head = newNode ;
        }
        this.length++ ;
        return this ;
    }

    shift() {
        if (!this.head) return undefined ;
        const removedHead = this.head ;
        if (this.length === 1) {
            this.head = null ;
            this.tail = null ;
        } else {
            this.head = removedHead.next ;
            this.head.prev = null ;
            removedHead.next = null ;
        }
        this.length-- ;
        return removedHead ;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null ;
        let current ;
        if (index <= this.length / 2) {
            current = this.head ;
            for (let i = 0; i < index; i++) {
                current = current.next ;
            }
        } else {
            current = this.tail ;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev ;
            }
        }
        return current ;
    }

    set(index, val) {
        const foundNode = this.get(index) ;
        if (foundNode) {
            foundNode.val = val ;
            return true ;
        }
        return false ;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false ;
        if (index === 0) return this.unShift(val) ;
        if (index === this.length) return this.push(val) ;
        const newNode = new Node(val) ;
        const previousNode = this.get(index - 1) ;
        const nextNode = previousNode.next ;
        previousNode.next = newNode ;
        newNode.prev = previousNode ;
        newNode.next = nextNode ;
        if (nextNode) nextNode.prev = newNode ;
        this.length++ ;
        return true ;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false ;
        if (index === 0) return this.shift() ;
        if (index === this.length - 1) return this.pop() ;
        const removedNode = this.get(index) ;
        const previousNode = removedNode.prev ;
        const nextNode = removedNode.next ;
        previousNode.next = nextNode ;
        if (nextNode) nextNode.prev = previousNode ;
        removedNode.prev = null ;
        removedNode.next = null ;
        this.length-- ;
        return true ;
    }

    print() {
        const arr = [] ;
        let current = this.head ;
        while (current) {
            arr.push(current.val) ;
            current = current.next ;
        }
        console.log(arr) ;
    }
}

*/

THE_BIG_O_>>(DOUBELY_LINKED_LIST)

/*

Access: O(n) Singly Linked List مشابه ل 

Search: O(n) Singly Linked List مشابه لل 

Insertion: O(1)

Deletion: O(1)

*/

(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)

                                            STACKS & QUEUES

STACK

/*

**stacks**

عامله شبه الاطباق اللي فوق بعضها كده بتضيف من فوق وبتحذف برضه من فوق stacks ال
بتضيفها برضه من فوق وبتحذفها برضه من فوق  data وكذلك ال
اخر واحد يدخل هو اخر واحد يطلع ( last in first out ) <- LIFO وده مبدا مشهور جدا اسمه 

*/

STACK_CODE

/*

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;  
    }
}

class Stack {
    constructor() {
        this.top = null;   
        this.size = 0;     
    }

    // Stack لإضافة عنصر إلى الـ 
    push(value) {
        const newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;  
        } else {
            newNode.next = this.top;  
            this.top = newNode;       
        }
        this.size++;
        return this;
    }

    // Stack لإزالة العنصر العلوي من الـ 
    pop() {
        if (this.top === null) {
            return null;  
        }
        const removedNode = this.top;  
        this.top = this.top.next;      
        this.size--;
        return removedNode.value;      
    }

    // لعرض العنصر العلوي دون إزالته
    peek() {
        if (this.top === null) {
            return null;  
        }
        return this.top.value;  
    }

    // لعرض حجم الـ Stack
    getSize() {
        return this.size;
    }
}

*/

THE_BIG_O_>>(STACK)

/*

Access: O(n) 

Push: O(1) الإضافة في الأعلى

Pop: O(1) إزالة العنصر من الأعلى

Peek: O(1) عرض العنصر في الأعلى

*/

QUEUE

/*

عامله شبه طابور العيش كده بتضيف من وره وبنحذف من قدام  queus ال 
بتضيفها من وره وبتحذفها من قدام data وكذلك ال
اول واحد يدخل هو اول واحد يخرج ( first in first out ) <- FIFO وده مبدا مشهور جدا اسمه 

*/

QUEUE_CODE

/*

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    print() {
        console.log(this.items.toString());
    }
}

*/

THE_BIG_O_>>(QUEUE)

/*

Access: O(n) 

Enqueue: O(1) الإضافة في النهاية

Dequeue: O(1) إزالة العنصر من البداية

Peek: O(1) عرض العنصر في البداية


*/

(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)(4)

                                            TREES
/*

**TREES**

بتبقى عباره عن شجره بس مقلوبه trees ال
branches وليها افرع يمين وشمال root شجره ليها جدر    
وليها انواع كتير بس في منهم نوعين مهمين جدا
فرعين اتنين بس كحد اقصى node وده فيه بيبقى عند كل  binary tree وهو ال (BT) -1
-:بس فيه خاصيه مهمه جدا وهي bt وهو نفس ال binary search tree وهو ال (BST) -2
اللي على اليمين دايما قيمتها اكبر من اللي على الشمال nodes ان ال

*/

BINARY_SEARCH_TREE_CODE>>(BST)

/*

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    find(value) {
        if (this.root === null) {
            return null;
        }
        var current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    bfs(){
        var q = [] , visited = [] ;
        var node = this.root ;
        q.push(node) ;
        while(q.length){
            node = q.shift() ;
            visited.push(node.value) ;
            if(node.left){ q.push(node.left) } ;
            if(node.right){ q.push(node.right) } ;
        }
        return visited ;
    }

    preorderTraversal(node, result) {
        if (node) {
            result.push(node.value);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
     }

    dfsPreOrder() {
        var result = [];
        this.preorderTraversal(this.root, result);
        return result;
    }
    
    inorderTraversal(root) {
        const result = [];
        this.dfsInOrder(root, result);
        return result;
    }

    dfsInOrder(node, result) {
        if (node) {
            dfsInOrder(node.left, result);
            this.result.push(node.value);
            this.dfsInOrder(node.right, result);
        }
    }

    postorderTraversal() {
        const result = [];
        this.dfsPostOrder(this.root, result);
        return result;
    }
    
    dfsPostOrder(node, result) {
        if (node) {
            this.dfsPostOrder(node.left, result);
            this.dfsPostOrder(node.right, result);
            result.push(node.value);
        }
    }

*/

THE_BIG_O_>>(BST)

/*

Access/Search:

O(log n): (Balanced Tree)
O(n): (Unbalanced Tree)

Insertion:

O(log n): (Balanced Tree)
O(n): (Unbalanced Tree)

Deletion:

O(log n): (Balanced Tree)
O(n): (Unbalanced Tree)

Tree Traversal:

Inorder, Preorder, Postorder Traversal: O(n) 
(tree في ال node يجب زيارة كل node في ال tree)

*/

(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)(5)

                                            HEAPS
/*

**HEAPS**

- لكن بشروط مختلفه شويه tree عباره عن heaps ال
- binary heaps بالظبط لكن احنا هنركز على ال trees ليها انواع كتير ذي ال heaps ال
- max binary heaps & min binary heaps اللي هيا برضه نوعين
- لكن بشروط مختلفه شويه bst عباره عن binary heaps  ال 
- min طبعا والعكس لو كان max ده لو كان  heap في ال node لازم يكون اكبر قيمه من اي root اولا ال
- max و ال min في ال root خالص اهم حاجه بس ترتيب ال heaps ثانيا مفيش ترتيب في ال
- بتتملي من الشمال لليمين heaps بالظبط ال trees ثالثا وذي ال
- بمعادلات رياضيه child وانهو ال parent عادي وبنعرف انهو ال array ممكن تتخزن في heap ال
- parent بتاع ال index هو رقم ال n افترض ان ال
- left child = 2n + 1 
- right child = 2n + 2
- parent = ( n - 1 ) / 2
- floor وطبعا لو طلعلك اي ارقام عشريه هتعملها

*/

BINARY_HEAPS_CODE

/*

class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element <= parent) break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    getMax() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

*/

THE_BIG_O_>>(BINARY_HEABS)

/*

Access: O(1) root للحصول على ال

Search: O(n)

Insertion: O(log n)

Deletion (Extract Max/Min): O(log n)

*/

(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)(6)

                                        PRIORITY_QUEUE

/*

**PRIORITY_QUEUE**

- data structure عباره عن نوع من انواع ال priority queue ال
- فيه بيتم ترتيب العناصر مش حسب قيمتها لكن حسب اولويتها
- الاعلى هيا اللي بيتم معالجتهاالاول  priority العناصر ذات الترتيب الاعلى او ال
- linked list او array بعده طرق ذي ال priority queue يمكن تمثيل ال
- min heap لكن افضل طريقه لتطبيقها هي باستخدام ال
- (حيث القيم الأصغر لها أولوية أعلى) Min-Heap مبنية على Priority Queue هنا سأقدم لك 

*/

PRIORITY_QUEUE_CODE>>(MIN_HEAP)

/*

class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(element, priority) {
        const node = { element, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    dequeue() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element.priority >= parent.priority) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

*/

THE_BIG_O_>>(PRIORITY_QUEUE)

/*

Access (Get Min): O(1) للحصول على العنصر ذو الأولوية العليا (الأصغر)

Insertion: O(log n)

Deletion (Extract Min): O(log n)

Peek: O(1) لعرض العنصر ذو الأولوية العليا (الأصغر)

*/

(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)(7)

                                            HASH_TABLE

/*

**Hash Table**

1. **التعريف**

    value فريد لكل key بشكل سريع باستخدام values بتخزن data structure هي Hash Table الـ 

2. **Hash Function**  

   array في الـ index وليكن ( اسم مثلا ) وتحوله لرقم يمثل الـ key بتاخد hash function الـ
   او (التصادمات) Collisions مصممه كويس علشان تقلل من الـ hash function  ولازم تكون الـ 

3. **او (التصادمات) Collisions الـ**

   index مختلف يدي نفس الـ  key بتحصل لما كذا  collisions الـ
   "Open Addressing" أو "Separate Chaining" وده ممكن نتجنبه عن طريق تقنيات ذي

4. **التقنيات**

   A. **Separate Chaining**

   index في نفس الـ collisions تخزن فيها العناصر اللي حصل بينهم linked list بتحتفظ بـ array في الـ cell كل
    linked list يبقى بيتخزنو في نفس الـ index بيستخدموا نفس الـ  "key1" و"key2" مثال: لو عندنا 

   B. **Open Addressing**

    :ومن ضمنها collesion elements بيستخدموا تقنيات مختلفة عشان يلاقوا مكان بديل لل

   1- **Linear Probing**: اللي بعده index مش فاضي بيتحرك لحد الـ index لو الـ

   2- **Quadratic Probing**: لتحديد مكان بديل Quadratic function بيستخدم

   3- **Double Hashing**: البديل index لتحديد الـ  hash functions 2 بيستخدموا

5. **Hash Table عمليات الـ**

   - **Set**: key باستخدام  Hash Table هي عملية تخزين قيمة جديدة في الـ 
    وبنخزن القيمة في المكان المحدد index ل key لتحويل ال hash function وبنستخدم الـ 

   - **Get**: معين key هي عملية استرجاع القيمة المخزنة باستخدام
    واسترجاع القيمة index للعثور على الـ hash function وبنستخدم نفس الـ

   - **Delete**: key باستخدام Hash Table هي عملية حذف قيمة من الـ
    و نحذف القيمة الموجودة في المكان ده index للعثور على الـ hash function وبنستخدم الـ

6. **Rehashing**

   يزيد مكن تأثر على الكفاءة Hash Table لما عدد العناصر في الـ 
   لكل العناصر الموجودة **rehashing** ونعمل array و في الحالة دي ممكن نكبر حجم الـ 
   جديده hash function وده باستخدام


7. **المميزات والعيوب**

   - **المميزات**:

     - وصول سريع للعناصر 
     - data مرونة في تخزين الـ

   - **العيوب**:

     - ممكن تأثر على الأداء collisions الـ
     - جيدة لتوزيع العناصر بشكل فعال hash function محتاجة

*/

THE_BIG_O_>>(HASH_TABLE)

/*

1. **Time Complexity**

   -----------------------------------------------------
   | worst case | best case | averege case | operation |
   |------------|-----------|--------------|-----------|
   |    O(n)    |    O(1)   |     O(1)     |    set    |
   |------------|-----------|--------------|-----------|
   |    O(n)    |    O(1)   |     O(1)     |    get    |
   |------------|-----------|--------------|-----------|
   |    O(n)    |    O(1)   |     O(1)     |   delete  |
   -----------------------------------------------------

2. **Space Complexity** 

   هو عدد العناصر n حيث O(n)


*/

HASH_TABLE_CODE_>>(SEPARATE_CHAINING)

/*

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }
}

*/

HASH_TABLE_CODE_>>(LINEAR_PROBING)

/*

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        while (this.table[index] !== undefined) {
            index = (index + 1) % this.size; 
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }
}

*/

HASH_TABLE_CODE_>>(QUADRATIC_PROBING)

/*

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let i = 1;
        while (this.table[index] !== undefined) {
            index = (index + i * i) % this.size;
            i++;
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let i = 1;
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + i * i) % this.size;
            i++;
        }
        return undefined;
    }
}

*/

HASH_TABLE_CODE_>>(DOUBLE_HASHING)

/*

class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }

    secondHash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return (total * 7) % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let step = this.secondHash(key);
        while (this.table[index] !== undefined) {
            index = (index + step) % this.size;
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let step = this.secondHash(key);
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + step) % this.size;
        }
        return undefined;
    }
}

*/

(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)(8)

                                            GRAPHS
 
/*

**Graphs**

1. **التعريف**

    edge  و الـ vertex  على شكل رسم باستخدام الـ values بتمثل الـ data structure هي graphs الـ 
    
    A. **vertex الـ**: graph اللي بتمثل قيمه معينه في الـ node هو عباره عن الـ

    B. **edge الـ**: vertex هو عباره عن الرابط اللي بيربط بين الـ

2. **graph انواع الـ***  

    A. **( Weighted / Un Weighted )**:

    vertex بتمثل المسافه بين الـ edge هي قيمه بتتحط على الـ
    Un Weighted ولو مش موجوده بيبقى Weighted Graph فلو القيمه دي موجوده بيبقى

    B. **( Directed / Un Directed )**:

    edge هي اتجاهات بتتحط على الـ
    Un Directed ولو مش موجوده بيبقى Directed Graph فلو الاتجاهات دي موجوده بيبقى

3. **Graphs تمثيل الـ**

   A. **Adjacency Matrix**:

    graph في الـ vertex فيها صف وعمود رئيسيين بكل Array 2D وهي بتبقى عباره عن 
    بينهم و 1 لو موجود edge وعند كل تقاطع بينهم بيكون موجود 0 لو مفيش

    -------------------------
    |(V)| A | B | C | D | E |
    |-----------------------|
    | A | 0 | 1 | 1 | 1 | 0 |
    |-----------------------|
    | B | 1 | 0 | 0 | 1 | 1 |
    |-----------------------|
    | C | 1 | 0 | 0 | 0 | 1 |
    |-----------------------|
    | D | 1 | 1 | 0 | 0 | 1 |
    |-----------------------|
    | E | 0 | 1 | 1 | 1 | 0 |
    -------------------------

   B. **Adjacency List**:

   key في هيئه graph اللي في الـ vertex بيبقى فيه كل الـ object هي عباره عن 
   الخاصه بيها Array بيبقى ليها الـ key وكل
   التانيه اللي متوصلين بيها فقط vertex  اللي بيبقى موجود فيها الـ

const graph = {
  'A': ['B', 'C', 'D'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'E'],
  'D': ['A', 'B', 'E'],
  'E': ['B', 'C', 'D']
};

4. **المميزات والعيوب**

   A. **Adjacency Matrix**:

   - **المميزات**:

     - vertex و ال edge وصول سريع للـ 
     - سهله الفهم والقراءه

   - **العيوب**:

     - استخدام الذاكرة: تحتاج إلى مساحة أكبر لتخزين جميع العلاقات
      حتى لو لم تكن موجودة

   B. **Adjacency List**:

   - **المميزات**:

     - كفاءة التخزين: تأخذ مساحة أقل 
     
     - أسرع وأسهل edge او الـ vertex سهولة التعديل: إضافة أو إزالة الـ 

   - **العيوب**:

    edge تحقق من وجود:

     - يحتاج إلى البحث في القائمة 
      مما يستغرق وقتًا أطول في بعض الحالات حتى لو لم تكن موجودة

      تعقيد الوصول:

     - يمكن أن يكون أقل كفاءة edge الوصول إلى جميع الـ

*/

THE_BIG_O_>>(GRAPH)

/*

 DFS (Depth-First Search):-

(Time Complexity):

حيث O(V + E) 
 هو عدد الرؤوس V (vertices).
 هو عدد الحواف E (edges).

(Space Complexity):

O(V) في المتوسط.

2. BFS (Breadth-First Search):-

(Time Complexity):-

مفيش فرق dfs هو هواه الـ

المساحة (Space Complexity):-

O(V) في أسوأ الحالات.

*/

GRAPH_CODE

/*

class Graph {
  constructor(directed = false) {
    this.adjacencyList = {};
    this.adjacencyMatrix = [];
    this.isDirected = directed;
    this.vertices = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.vertices.push(vertex);
      this.updateMatrix();
    }
  }

  updateMatrix() {
    const size = this.vertices.length;
    this.adjacencyMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    
    for (let i = 0; i < size; i++) {
      const vertex = this.vertices[i];
      for (let edge of this.adjacencyList[vertex]) {
        let j = this.vertices.indexOf(edge.vertex);
        this.adjacencyMatrix[i][j] = edge.weight;
      }
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    
    if (!this.isDirected) {
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }

    this.updateMatrix();
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v.vertex !== vertex2);
    }

    if (!this.isDirected && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v.vertex !== vertex1);
    }

    this.updateMatrix();
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let neighbor in this.adjacencyList) {
      this.removeEdge(neighbor, vertex);
    }

    delete this.adjacencyList[vertex];
    this.vertices = this.vertices.filter(v => v !== vertex);
    this.updateMatrix();
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor.vertex]) {
          visited[neighbor.vertex] = true;
          queue.push(neighbor.vertex);
        }
      });
    }

    return result;
  }

  dfsIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor.vertex]) {
          visited[neighbor.vertex] = true;
          stack.push(neighbor.vertex);
        }
      });
    }

    return result;
  }

  dfsRecursive(start, visited = {}, result = []) {
    if (!start) return result;

    visited[start] = true;
    result.push(start);

    this.adjacencyList[start].forEach(neighbor => {
      if (!visited[neighbor.vertex]) {
        this.dfsRecursive(neighbor.vertex, visited, result);
      }
    });

    return result;
  }

  printList() {
    for (let vertex in this.adjacencyList) {
      let neighbors = this.adjacencyList[vertex]
        .map(neighbor => `${neighbor.vertex}(${neighbor.weight})`)
        .join(", ");
      console.log(`${vertex} --> ${neighbors}`);
    }
  }

  printMatrix() {
    console.log("  " + this.vertices.join(" "));
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      console.log(this.vertices[i] + " " + this.adjacencyMatrix[i].join(" "));
    }
  }
}


  // DFS لكشف الدورة في الجراف الموجه
  hasCycle() {
    const visited = {};
    const recursionStack = {}; // لتعقب الرؤوس في مسار الزيارة

    const dfs = (vertex) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        recursionStack[vertex] = true;

        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor] && dfs(neighbor)) {
            return true;
          } else if (recursionStack[neighbor]) {
            return true;
          }
        }
      }

      recursionStack[vertex] = false; // إزالة الرأس من مسار الزيارة
      return false;
    };

    // تحقق من كل رأس في الجراف (لأن الجراف قد يكون غير متصل)
    for (let vertex in this.adjacencyList) {
      if (dfs(vertex)) return true;
    }

    return false;  // لا يوجد دورة
  }
}


  // DFS لكشف الدورة
  hasCycle() {
    const visited = {};

    const dfs = (vertex, parent) => {
      visited[vertex] = true;

      for (let neighbor of this.adjacencyList[vertex]) {
        // إذا لم تتم زيارته، قم بالزيارة باستخدام DFS
        if (!visited[neighbor]) {
          if (dfs(neighbor, vertex)) return true;
        }
        // إذا تمت زيارته وليس الأب، فهذا يعني وجود دورة
        else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    // تحقق من كل رأس في الجراف (لأن الجراف قد يكون غير متصل)
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        if (dfs(vertex, null)) return true;
      }
    }

    return false;  // لا يوجد دورة
  }
}

*/