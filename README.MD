# eslint-plugin-zzp

some code style by zzp

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nvwa`:

```
$ npm install eslint-plugin-nvwa --save-dev
```


## Usage

Add `zzp` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "zzp"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "zzp/pangu": 2
    }
}
```



## Supported Rules

- pangu: space between chinese and english

## Powered by yo &&  generator-eslint

```shell
yo eslint:plugin 
```





