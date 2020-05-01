class Node{
  constructor(value){
    this.value=value,
    this.next=null
  }
}

class MyLinkedList{
  constructor(value){
    this.head={
      value:value,
      next:null
    },
    this.tail=this.head,
    this.length=1
  }

  append(value){ //O[1]
let newone=new Node(value);
this.tail.next=newone;
this.tail=newone;
this.length++;
return this;
  }
  prepend(value){  //O[1]
let newone=new Node(value);
newone.next=this.head;
this.head=newone;
this.length++;
return this;
  }

  printItems(){  //O[n]
let array=[];
let indexvalue=this.head;
while(indexvalue!==null){
  array.push(indexvalue.value);
  indexvalue=indexvalue.next;
}
return array;
  }

  insert(value,index){  //O[n]
    const array=this.printItems();
    if(index < array.length){
      const node=new Node(value);
    const leader=this.traverseToIndex(index-1);
    const follower=leader.next;
    leader.next=node;
    node.next=follower;
    this.length++;
    }else{
      this.append(value)
    }
return this;
  }
  traverseToIndex(index){
let list=this.head;
let count=0;
while(count<index){
  list=list.next;
  count++;
}
return list;
  }

  remove(index){  //O[n]
     const array=this.printItems();
    if(index < array.length){
    const leader=this.traverseToIndex(index-1);
    const follower=leader.next;
    leader.next=follower.next;
   this.length--;
    
    }
return this;
  }
}

const linkedList= new MyLinkedList(10);
linkedList.append(3);
linkedList.insert(4,100)
linkedList.insert(2,1)
linkedList.printItems();