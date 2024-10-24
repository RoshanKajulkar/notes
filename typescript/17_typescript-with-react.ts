/*
 * TypeScript with React
 * ---------------------
 *
 * TypeScript can be seamlessly integrated with React (or other frameworks like Angular and Vue) to provide static typing and better tooling.
 * In this section, we’ll cover how to use TypeScript with React components, typing props and state, and using higher-order components.
 */

/*
 * 1. Using TypeScript in React Components
 * ---------------------------------------
 *
 * - React components written in TypeScript can be either function components or class components.
 * - TypeScript provides static type checking to ensure that your components receive the correct props and state values.
 */

/*
 * Example: Functional Component with Props
 */

import React from 'react';

// Defining a type for the props
type GreetingProps = {
    name: string;
    age?: number; // Optional prop
};

const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
    <div>
        <h1>Hello, {name}!</h1>
        {age && <p>You are {age} years old.</p>}
    </div>
);

// Usage: <Greeting name="Alice" age={25} />

/*
 * - The `React.FC` type is used to type functional components in React. It ensures that the component receives the correct props.
 * - In this example, `GreetingProps` defines that `name` is required and `age` is optional.
 */

/*
 * 2. Typing Props and State in Class Components
 * ---------------------------------------------
 *
 * - For class components, you need to define both props and state types using generics in `React.Component`.
 */

type CounterProps = {
    initialCount: number;
};

type CounterState = {
    count: number;
};

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { count: props.initialCount };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

// Usage: <Counter initialCount={0} />

/*
 * - `CounterProps` defines the expected props for the `Counter` component.
 * - `CounterState` defines the shape of the component's internal state.
 * - In the class component, we use `React.Component<CounterProps, CounterState>` to declare both props and state types.
 */

/*
 * 3. Higher-Order Components (HOCs) with TypeScript
 * -------------------------------------------------
 *
 * - A higher-order component (HOC) is a function that takes a component and returns a new component with enhanced functionality.
 * - In TypeScript, typing HOCs can be tricky, but it's essential to ensure that the types of the original component are preserved.
 */

type WithLoggingProps = {
    logMessage: string;
};

function withLogging<T extends object>(
    WrappedComponent: React.ComponentType<T>
): React.FC<T & WithLoggingProps> {
    return (props: T & WithLoggingProps) => {
        console.log(props.logMessage);
        return <WrappedComponent {...props} />;
    };
}

// Example usage:

type UserProps = {
    username: string;
};

const UserProfile: React.FC<UserProps> = ({ username }) => (
    <div>User: {username}</div>
);

const UserProfileWithLogging = withLogging(UserProfile);

// Usage: <UserProfileWithLogging username="JohnDoe" logMessage="Rendering UserProfile" />

/*
 * - `withLogging` is a HOC that logs a message whenever the component renders.
 * - The generic type `T` captures the props of the wrapped component, ensuring that both the original component’s props and the additional `logMessage` prop are correctly typed.
 */

/*
 * 4. Using TypeScript in Other Frameworks (Angular/Vue)
 * ----------------------------------------------------
 *
 * - In Angular and Vue, TypeScript integration is also common.
 * - Angular is built with TypeScript, so you naturally get strong typing in components, services, and templates.
 * - Vue has support for TypeScript using libraries like `vue-class-component` and `vue-property-decorator`, enabling you to define component props and data with TypeScript types.
 */

/*
 * Summary:
 * -------
 * - TypeScript ensures type safety in React components by typing props and state.
 * - In functional components, you can use `React.FC` to type props, and in class components, you define props and state using generics.
 * - Higher-order components can be typed using generics to ensure the correct types of both the wrapped component and any additional props.
 * - The principles of typing components and state apply similarly in other frameworks like Angular and Vue.
 */
