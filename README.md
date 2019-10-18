# React App Generator

https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac

_(in development)_

Requires node version 10.15

## Development
```shell
npm link
```

## How to use

The following commands will generate named template folders and files

### Generate Components
```shell
rag -c my-component-name
```

### Generate Services
```shell
rag -s my-service-name
```

### Configuration

create _.ragrc_ in the root of the project directory

Use ini or json format

```
[structure]
    root = test/mysrc
    components = test-components
    services = test-services
```

- _root_ is the src directory (default is _src_)
- _components_ is the directory for the components (default is _components_)
- _services_ is the directory for the components (default is _services_)