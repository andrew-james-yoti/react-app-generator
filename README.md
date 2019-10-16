# React App Generator

_(in development)_

Requires node version 10.15

## Development
```shell
npm link
```

## How to use
```shell
rag component my-component-name
```

### Configuration

create _.ragrc_ in the root of the project directory

Use ini or json format

```
[structure]
    root = test/mysrc
    components = /test-components
```

- _root_ is the src directory (default is _src_)
- _components_ is the directory for the components (default is _components_)