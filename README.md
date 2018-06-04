# s-localstorage
Is a simple library for work with local storage or session storage. Supported types:
`array`, `number`, `boolean`, `object*`
Supported object or array if they not included types like function, symbol, etc.
### Install
run 
```bash
npm i s-localstorage
```
### Usage
```js
import {localStorage, sessionStorage} from 's-localstorage'

localStorage.clear()
localStorage.set('key', {'test': 'value'})
localStorage.get('key')
localStorage.remove('key')

sessionStorage.clear()
sessionStorage.set('key', {'test': 'value'})
sessionStorage.get('key')
sessionStorage.remove('key')
```
You can use `defaultValue` for get method (default it is null)

```js
localStorage.get('key', {})
``` 
If browser not supported localStorage or sessionStorage you find console error message, 
but all method should works (method `get` return null or default value)
