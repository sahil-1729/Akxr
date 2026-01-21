class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}
}

const hitesh = new TakePhoto("a", "b");

class Instagram extends TakePhoto {}

// Now when we add abstract keyword, it shows error that we cant create instance
abstract class TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}
}
const hitesh1 = new TakePhoto1("a", "b");

// They(abstract class) are like blueprint, we cant create object, its reposnisiblity of class whos inheriting to create obj

// we cant have fn without implementation i.e void in normal classes, but we can, on abstract classes
class A {
  b() {
    return 1;
  }
  a(): void;
}
// here in abstract class we can have a fn, without any fn implementation, by using 'abstract' keyword
abstract class B {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}
  b() {
    return 1;
  }
  abstract a(): void;
}

// here the class whos extending, needs to must, implement the fn implementation
class Instagram1 extends B {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burs: number,
  ) {
    super(cameraMode,filter);
  }

  a(){
    console.log("hello world")
  }
}

// abstract classes cannot create obj on their own

