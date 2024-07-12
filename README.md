Ссылка на сайт https://aviasales-viktoryshes-projects-7ec2f450.vercel.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!--
Aviasales App #1 - Верстка
1. Изучите ТЗ по тестовому и макет
2. Сверстайте макет, используя scss и css-modules. Макет должен приемлимо выглядеть на мобильных экранах - не разваливаться и сохранять функиональность.
3. Пока не реализуейте никакую логику/интерактив

Aviasales App #2 - Redux
1. Установите пакеты для redux, настройте работу redux
2. Реализуйте хранение состояния сортировки в сторе редакса
3. Реализуйте хранения состояния чекбоксов в сторе редакса
4. Реализуйте функционал включения/выключения фильтров, описанный ниже

Фильтры:
Если включается галочка "Все" - проставляются галочки всем остальным фильтрам
Если снимается галочка "Все" - снимаются все остальные фильтры
Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится

Aviasales App #3 - Получение данных
В случае проблем с оригинальным апи - можете использовать наш аналог https://aviasales-test-api.kata.academy/search
1. Установите redux-thunk и добавьте в приложение
2. Настройке работу Redux DevTools
3. Пользуясь описанием апи, получите первую порцию билетов и положите в store
4. Отрендерьте данные из стора на страницу

Aviasales App #4 - Завершение
1. Настройте получение полного набора данных (порядка десяти тысяч билетов) и обработку ошибок. Убедитесь, что key в рендере выбран правильно.
2. Настройте работу фильтров и сортировки
3. Добавьте лоадер, по которому будет видно, что не все данные еще загружены. При этом до завершения получения данных уже можно видеть и работать с неполным набором (см пример на сайте aviasales).
4. Проверьте приложение на отсутствие ошибок линтера, ошибок в консоли и приведите код в порядок.
5. Заливайте приложение на Vercel (now.sh). Ссылку разместите в readme.
Особенности работы фильтров:

Количество пересадок - это точное количество пересадок в одну из сторон.
Если по результатам фильтрации нет рейсов (например, ни одна галочка не выбрана) - должно быть сообщение "Рейсов, подходящих под заданные фильтры, не найдено"

Final fixes
1.Нужно получать все пачки билетов. Условия окончания запросов описаны в инструкции по работе с сервером.
2.https://github.com/ViktoryShe/Aviasales/blob/main/src/components/Filters/Filters.jsx#L42C1-L47C4 https://github.com/ViktoryShe/Aviasales/blob/main/src/components/TicketList/TicketList.jsx#L37C1-L41C4 https://github.com/ViktoryShe/Aviasales/blob/main/src/components/Ticket/Ticket.jsx#L26C1-L41C4 функции обертки для создания элементов внутри компонентов не нужны, переноси логику в верстку.
3.https://github.com/ViktoryShe/Aviasales/blob/main/src/components/Filters/Filters.jsx#L20C11-L20C59 https://github.com/ViktoryShe/Aviasales/blob/main/src/components/Filters/Filters.jsx#L52C8-L52C63 функционально это один и тот же массив, его нужно вынеси в константу. Должен быть один источник истины, при изменении которого менялся бы весь функционал, а не приходилось бы искать что ещё нужно поправить.
4.Базовый url всегда нужно выносить в константу.
5.https://github.com/ViktoryShe/Aviasales/blob/main/src/actions/ticketThunks.js#L22 не увидел смысла в этом счетчике.
6.https://github.com/ViktoryShe/Aviasales/blob/main/src/actions/ticketThunks.js#L31 индикатор загрузки должен отображаться пока не загрузятся все билеты.
7.https://github.com/ViktoryShe/Aviasales/blob/main/src/components/TicketList/TicketList.jsx#L27C1-L31C44 нужно разбить на два useMemo, так что бы при изменении сортировки не происходило перефильтрации.
8.https://github.com/ViktoryShe/Aviasales/blob/main/src/components/Ticket/Ticket.jsx#L7C1-L23C2 вспомогательные функции должны лежать в utils.
-->
