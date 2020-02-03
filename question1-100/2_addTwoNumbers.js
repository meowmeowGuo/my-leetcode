/* 2. 两数相加
* 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
* 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
* 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
* 示例：
* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
* 输出：7 -> 0 -> 8
* 原因：342 + 465 = 807
* */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(list) {
  let lastNode;
  for (let i = list.length - 1; i > -1; i--) {
    const currentNode = new ListNode(list[i]);
    if (lastNode) {
      currentNode.next = lastNode;
    }
    lastNode = currentNode;
  }
  return lastNode;
}

const l1 = generateList([2, 4, 3]);
const l2 = generateList([5, 6, 4]);
const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let lastNode, head;

  function getRes() {
    const v1 = arguments[0] ? arguments[0].val : 0;
    const v2 = arguments[1] ? arguments[1].val : 0;
    let res = v1 + v2 + carry;
    if (Math.floor(res / 10)) {
      carry = 1;
    } else {
      carry = 0;
    }
    const currentNode = new ListNode(res % 10);
    if (!head) {
      head = currentNode;
    }
    if (lastNode) {
      lastNode.next = currentNode;
    }
    lastNode = currentNode;
  }

  while (l1 || l2) {
    getRes(l1, l2);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  if (carry) {
    lastNode.next = new ListNode(parseInt(1));
  }
  return head;
};

const res = addTwoNumbers(l1, l2);
console.log(res);
