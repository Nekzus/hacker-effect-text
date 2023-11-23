# React Hacker Effect

[![Github Workflow](https://github.com/nekzus/hacker-effect-text/actions/workflows/publish.yml/badge.svg?event=push)](https://github.com/Nekzus/hacker-effect-text/actions/workflows/publish.yml)
[![npm-version](https://img.shields.io/npm/v/@nekzus/react-hacker-effect.svg)](https://www.npmjs.com/package/@nekzus/react-hacker-effect)
[![npm-month](https://img.shields.io/npm/dm/@nekzus/react-hacker-effect.svg)](https://www.npmjs.com/package/@nekzus/react-hacker-effect)
[![npm-total](https://img.shields.io/npm/dt/@nekzus/react-hacker-effect.svg?style=flat)](https://www.npmjs.com/package/@nekzus/react-hacker-effect)

`react-hacker-effect` is a React library designed to bring an immersive hacker-themed animated text effect to your user interface. This library provides customizable options, allowing you to seamlessly integrate dynamic and engaging text animations into your React applications.

## Installation

To install the library using npm, run the following command:

```bash
npm install @nekzus/react-hacker-effect
```

## Usage
### Basic Usage
The HackerEffectText component is the gateway to infusing a hacker-inspired animation into your text. Here's a basic example:

```jsx
import React from 'react';
import { HackerEffectText } from 'react-hacker-effect';

const MyComponent = () => {
  return (
    <HackerEffectText initialValue="Access Granted" targetValue="Welcome to the System" capitalize>
      <div className="content-container">
        {/* Your content here */}
      </div>
    </HackerEffectText>
  );
};
```

In this example, the HackerEffectText component wraps around your content, animating the transition from the initialValue ("Access Granted") to the targetValue ("Welcome to the System"). The capitalize prop is set to true, giving the text a distinct uppercase hacker aesthetic.

## Props
initialValue (required)
Type: string
The initial text value for the hacker-inspired animation.
targetValue
Type: string
The target text value for the animation. If provided, the animation will transition from initialValue to targetValue.
capitalize
Type: boolean
Default: false
If true, the text will be displayed in uppercase, enhancing the hacker-themed effect.
className
Type: string
Additional class name(s) to apply to the animated text container.
## Examples
### Example 1: Basic Usage
Apply the HackerEffectText component for a hacker-style text animation:

```jsx
<HackerEffectText initialValue="Access Granted">
  <div className="content-container">
    {/* Your content here */}
  </div>
</HackerEffectText>
```
### Example 2: Transition with Uppercase
Elevate your text presentation with a smooth transition and uppercase styling:

```jsx
<HackerEffectText initialValue="Access Granted" targetValue="Welcome to the System" capitalize>
  <div className="content-container">
    {/* Your content here */}
  </div>
</HackerEffectText>
```
In this example, the text smoothly transforms from "Access Granted" to "Welcome to the System" with a hacker-inspired animation, all displayed in uppercase.

## Codesandbox

[Link](https://codesandbox.io/p/devbox/react-hacker-effect-yw5ykh)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Special thanks to React for providing the foundation for this library.
Contributing
Contributions are welcome! Please follow our Contribution Guidelines for more details. Whether it's raising issues, submitting pull requests, or suggesting improvements, your input is valued.

This documentation has been tailored for the specific project "React Hacker Effect," providing a comprehensive guide for users and potential contributors. Feel free to customize it further based on the unique features and characteristics of your library.
