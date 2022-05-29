import React from "react";

const Blogs = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='lg:w-1/2 mx-auto text-left text-lg my-5 bg-base-300 p-5'>
        <div>
          <h5 className='font-bold '>
            (Q) How will you improve the performance of a React Application?. ?{" "}
          </h5>
          <h6>
            <strong>Answer : </strong> To improve the performance of a react
            application, When it's necessary! we should keep our component state
            local. To avoid unwanted re-renders, we should memorize React
            components. In the code react code splitting with dynamic import().
            In React, lazy image loading is possible which can
          </h6>
        </div>
        <div>
          <h5 className='font-bold pt-5'>
            (Q) What are the different ways to manage a state in a React
            application ?
          </h5>
          <h6>
            <strong>Answer : </strong> <br />
            (1) State management by mitigating prop drilling <br />
            (2) State management when update your page after creating/updating
            data, without a refresh. <br />
            (3) Manage your state by storing it in the right places <br /> (4)
            Fetching data in a diffrent container components
          </h6>
        </div>
        <div>
          <h5 className='font-bold pt-5'>
            (Q) How does prototypical inheritance work?.{" "}
          </h5>
          <h6>
            <strong>Answer : </strong> Every object has an internal and insideas
            property called Prototype that is present in all of its methods and
            properties. Prototypal Inheritance is a javascript feature that
            allows us to add methods and attributes to our objects. It's a
            technique that allows us one object to inherit or the attributes and
            methods of another.
          </h6>
        </div>
        <div>
          <h5 className='font-bold pt-5'>
            (Q) Why you do not set the state directly in React. ?{" "}
          </h5>
          <h6>
            <strong>Answer : </strong> <br />
            When you update the state directly, nothing happens to it. Instead,
            it creates a pending state transition by declaring a State Variable
            in the class and initializing count state with 0 by setting
            this.state to like the count 0 function component. Because we don't
            have this, we can't assign or read this.state. Rather, we utilize
            the useState Hook from within our component.
          </h6>
        </div>
        <div>
          <h5 className='font-bold pt-5'>
            (Q) What is a unit test? Why should write unit tests?{" "}
          </h5>
          <h6>
            <strong>Answer : </strong> <br />
            Unit tests are automated tests designed and executed by software
            engineers to confirm that a piece of an application that refers to
            as a "unit" If it matches its design and operates as expected. A
            unit in procedural programming can be a whole module, although it's
            more likely to be a single function or process.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
