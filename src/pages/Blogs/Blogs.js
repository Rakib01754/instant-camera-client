import React from 'react';
import useTitle from '../../hooks/useTitle/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <>
            <h1 className='text-5xl font-bold my-6 underline'>Blogs</h1>
            <div className='px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className="p-6 overflow-hidden rounded-lg shadow-lg dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <article>
                        <h2 className="text-2xl font-bold">1. What are the different ways to manage a state in a React application?</h2>
                        <p className="mt-4 dark:dark:text-gray-400">The Four Kinds of React State to Manage Local state. Global state. Server state. URL state.The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.</p>
                    </article>
                </div>
                <div className="p-6 overflow-hidden rounded-lg shadow-lg dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <article>
                        <h2 className="text-2xl font-bold">2. How does prototypical inheritance work?</h2>
                        <p className="mt-4 dark:dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                    </article>
                </div>
                <div className="p-6 overflow-hidden rounded-lg shadow-lg dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <article>
                        <h2 className="text-2xl font-bold">3 What is a unit test? Why should we write unit tests?</h2>
                        <p className="mt-4 dark:dark:text-gray-400">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                            Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
                    </article>
                </div>
                <div className="p-6 overflow-hidden rounded-lg shadow-lg dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <article>
                        <h2 className="text-2xl font-bold">4 React vs. Angular vs. Vue?</h2>
                        <h4 className='text-xl font-bold underline'>Angular</h4>
                        <p className="mt-4 dark:dark:text-gray-400">The best thing about Angular is its constant updates. Angular launches an update every 6 months and the new versions build upon the older ones. Take Angular 11 update, for example, which has gotten rid of all bugs the previous version had. Of course, you need to keep a watch on the updates, as the code may be affected in case of a major update. But Google makes sure to wait another 6 months after an update before pulling the previous tools, giving you a full year to change code if the need arises. However, this is just the tip of the iceberg. There are several more reasons why Angular is a favorite for large scale apps with complex functionalities, which wish to scale further.</p>
                        <h4 className='text-xl font-bold underline'>React Js</h4>
                        <p className="mt-4 dark:dark:text-gray-400">This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013. There are primarily three reasons which have made the React library a developer darling -

                            Code Reusability- it allows developers to reuse blocks of code for a simple function

                            Ease-of-use - React, though tougher than Vue, has a less steep learning curve than Angular JS.

                            Customizable - The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification.</p>
                        <h4 className='text-xl font-bold underline'>Vue Js</h4>
                        <p className="mt-4 dark:dark:text-gray-400">Since Vue is the new kid on the block, not many businesses have ventured into Vue JS development yet, and thus, real-time assessment of the pros and cons of Vue is not very well-documented. However, what we do know is that Vue has the best of both worlds- two-way data binding like Angular and flexibility in code like React. Because of this, Vue is rising steadily through the ranks and has a massive market in Asia- Alibaba and Xiaomi are the big names using Vue JS.

                            Hence, the fastest JavaScript framework – TezJS, uses Vue as the primary base of the language

                            Vue is best utilized in cases of lightweight yet high performance, intuitive apps as the applications are quickly ready for the market without compromising on the performance or functionalities. Let us take a quick look at what makes Vue JS a lucrative choice for businesses.</p>
                    </article>
                </div>
            </div>
        </>

    );
};

export default Blogs;