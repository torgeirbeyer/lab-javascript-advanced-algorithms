function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(number) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(number);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
};


QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    this.queueControl.shift();
  } else {
    return;
  }
};
