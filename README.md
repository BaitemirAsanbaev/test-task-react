# Список пользователей

### Stack
- React
- Vite
- TypeScript
- Redux Toolkit
- Scss
- React hook forms
- axios
- Material UI

###  Установка и запуск проекта
###### Перед запуском понадобиться установить бэкенд и запустить его
```shell
git clone https://github.com/BaitemirAsanbaev/test-task-express.git
```
```shell
cd test-task-express
npm i
npm run dev
```

###### Склонировать репозиторий фронтенда
```shell
git clone https://github.com/BaitemirAsanbaev/test-task-react.git
```

###### Установить библиотеки и запустить
```shell
npm i
npm run dev
```

### Функционал
- Отображение списка пользователей в виде карточек
- Всплывающее окно с полной информацией о пользователе
- Возможность добавить нового пользователя
- Сортировка по имени (a-z и z-a)
- Сортировка по возрасту (от старшего и от младшего)
- Фильтрация по роли и по верификации
- Поиск по имени username email и адресу
- хранение пользователей в локальном хранилище

### Структура проекта
###### components
Переиспользуемые tsx компоненты, испльзуются для ui. Содержат hooks props actions и модульный scss
###### models
Модели для типизации пользователей. Содержит enum для ролей и interface для пользователей.
###### store
Redux. Содержит:
- слайсы для отслеживания состояний модальных окон и списка пользователей
- кастомные dispatch и selector хуки
- asyncThunk. Запросы на сервер
- инициализация и конфигурация store

### Backend
Для этого проекта я решил написать небольшой backend на nodejs express с базой данных в виде json файла.
Запрос на сервер отправляется в двух случаях:
- При создании нового пользователся
- При первой загрузке списка пользователей

