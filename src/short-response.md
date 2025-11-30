# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1

In object-oriented programming, **inheritance** is when you're importing methods and properties from a **parent class** to a **child class (subclass)**. According to MDN, inheritance happens when an object is created, and it's automatically linked to its parent classes through the prototype chain.

---

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() {
    return "eating";
  }
}

class Dog extends Animal {
  bark() {
    return "woof";
  }
}

class Puppy extends Dog {
  play() {
    return "playing";
  }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2

When `rex.eat()` is invoked, the system uses the prototype chain in order to actually search and find to invoke the method. **Inhertiance** plays a big part in this because even though theres a new **instance** of `Puppy`, due to the fact that the `Puppy` is a subclass of `Dog` and `Dog` is the subclass of Animal, `Puppy` has access to methods defined both `Dog` & `Animal`, so the system searches through the prototype chain in order to find the correct method.

---

## Prompt 3

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getDetails() {
    return `${super.getDetails()} from ${this.department}`;
    // YOUR CODE HERE - should include both the Employee details
    // AND the department info
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3

In the code provided, the use of `super` in the **constructor** is needed because it calls the **parent constructor** in order to **transport** the `name` and `salary` **properties**. If the `super` keyword were not used, you would get a `ReferenceError`.

In the second portion of the code, in the `getDetails()` method, I used `super.getDetails()` because, similar to the first use above, it allows the code of the **parent method** to transport `name` and `salary` so that we can **redefine** the purpose of the **method**. If the `super` keyword were not used, I would have had to manually type the code from the parent method named `getDetails()`.
