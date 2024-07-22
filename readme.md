## @lcdkhoa/object-handler

Convert complex nested data structures into flat formats and vice versa, to enhance simplicity and efficiency in data management.

## Installation

Install the package using npm:

```sh
npm install @lcdkhoa/object-handler
```

Or using yarn:

```sh
yarn add @lcdkhoa/object-handler
```

## Usage

#### Flatten Objects

Converts a nested object into a flat object.

```js
import { FlattenObjects } from "@lcdkhoa/object-handler";

const splitter = "_"; // Custom splitter, default is "_"
const nestedObject = {
  user: {
    name: "John Doe",
    address: {
      city: "New York",
      country: "USA",
    },
  },
};

const flatObject = FlattenObjects(nestedObject, splitter);

console.log(flatObject);
// Output: { "user_name": "John Doe", "user_address_city": "New York", "user_address_country": "USA" }
```

#### UnFlattening Objects

Converts a flat object back into a nested object.

```js
import { UnFlatObjects } from "@lcdkhoa/object-handler";

const splitter = "_"; // Custom splitter, default is "_"
const flatObject = {
  user_name: "John Doe",
  user_address_city: "New York",
  user_address_country: "USA",
};

const nestedObject = UnFlatObjects(flatObject, splitter);

console.log(nestedObject);
// Output: { user: { name: "John Doe", address: { city: "New York", country: "USA" } } }
```

#### Handling Arrays within Objects

Demonstrates how to handle objects containing arrays when flattening and unFlattening.

##### Flattening Objects with Arrays

```js
import { FlattenObjects } from "@lcdkhoa/object-handler";

const splitter = "_"; // Custom splitter, default is "_"
const objectWithArray = {
  user: {
    name: "Jane Doe",
    hobbies: ["reading", "painting", "cycling"],
  },
};

const flatObject = FlattenObjects(objectWithArray, splitter);

console.log(flatObject);
// Output: { "user_name": "Jane Doe", "user_hobbies[0]": "reading", "user_hobbies[1]": "painting", "user_hobbies[2]": "cycling" }
```

##### UnFlattening Objects with Arrays

```js
import { UnFlatObjects } from "@lcdkhoa/object-handler";

const splitter = "_"; // Custom splitter, default is "_"
const flatObjectWithArray = {
  user_name: "Jane Doe",
  "user_hobbies[0]": "reading",
  "user_hobbies[1]": "painting",
  "user_hobbies[2]": "cycling",
};

const nestedObject = UnFlatObjects(flatObjectWithArray, splitter);

console.log(nestedObject);
// Output: { user: { name: "Jane Doe", hobbies: ["reading", "painting", "cycling"] } }
```

## Playground

Explore and test the capabilities of `@lcdkhoa/object-handler` in real-time with our interactive playground. Visit [https://lcdkhoa.com/tools](https://lcdkhoa.com/tools) to access the playground.

### Features

- **Live Editing**: Instantly see the results of flattening and unFlattening operations as you type.
- **Custom Configurations**: Experiment with different configurations, such as custom split keys for unFlattening.
- **Examples Library**: Access a variety of pre-defined examples to understand how `@lcdkhoa/object-handler` can be used in different scenarios.
- **Code Export**: Easily export your playground code for use in your projects.

### How to Use

1. **Navigate** to [https://lcdkhoa.com/tools](https://lcdkhoa.com/tools).
2. **Select** the `@lcdkhoa/object-handler` playground from the tools list.
3. **Enter** your JSON object in the input area. You can choose to flatten or un-flat the object.
4. **Customize** the operation using the available options, if needed.
5. **Observe** the output in real-time as you make changes.
6. **Copy** the output or export the code snippet for use in your project.

This playground is an excellent way to familiarize yourself with the library's functionality and to prototype solutions before integrating them into your application.

## GitHub

For more information, updates, and to contribute to the project, visit our GitHub repository:

[https://github.com/lcdkhoa/object-handler](https://github.com/lcdkhoa/object-handler)

We welcome contributions, feedback, and bug reports!

## License

This project is licensed under the MIT License.
