# Circle Progress Bar

Компонент для отображения кольцевого прогресс бара. 

### Использование компонента

1. Необходимо импортировать скрипт в html или js, компонент определится в HTML при запуске скрипта.
```html
    <script src="dist/circle-progress-bar/index.js"></script>
```

или

```js
import 'dist/circle-progress-bar/index.js';
```

2. Добавьте в разметку компонент
```html
    <circle-progress-bar></circle-progress-bar>
```

3. Определите аттрибуты внутри html разметки или при помощи js
```html
<circle-progress-bar value="50" state="Normal"></circle-progress-bar>
```

или

```js
document.querySelector('circle-progress-bar').setAttribute('value', 75)
```

### Аттрибуты
Компонент поддерживает 2 аттрибута:<br><br>

`value: number` – процент заполеннности прогресс-бара. По умолчанию – `0`. При `state: 'Animated'` значение `value` не учитывается (прогресс-бар автоматически заполняется на 25%), значение value не меняется (при выключении state 'Animated', установится предыдущее знаенчие) 

`state: 'Normal' | 'Animated' | 'Hidden'` – состояние компонента. По умолчанию – `'Normal'`.<br>
>`'Normal'` – состояние, при котором компонент отображает заполненность прогреса исходя из значения аттрибута `value`.<br>
>`'Animated'` – состояние, при котором прогресс-бар выглядит, как лоадер – крутится частично заполненная шкала.<br>
>`'Hidden'` - состояние, при котором элемент скрывается со страницы.
<br>
