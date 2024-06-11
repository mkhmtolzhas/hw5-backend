
## 🥉 Basic Level

### Tasks

- [ ] `GET` /api/events : get list of events
- [ ] `GET` /api/events/:id : get exact event
- [ ] `POST` /api/events : create a new event

## 🥈 Medium Level

### Tasks

- [ ] Registration with indication of the city
- [ ] Login
- [ ] A list of events in the user's city is displayed in `/api/events` for an authorized user

## 🥇 Hard Level

### Tasks

- [ ] Add paginations
- [ ] Sorting for `/api/events?sortBy=rating&sortDirection=desc`

### 📂 Routes

- **`api/v1/event/your`**: Ивенты в городе где ты живешь
- **`api/v1/events`**: Ивенты в целом
- **`api/v1/events/:id`**: Получить конкретный ивент
- **`POST /api/v1/events`**: Создать ивент
- **`POST api/v1/login`**: Логин
- **`POST api/v1/register`**: Регистрация
- **`POST api/v1/refresh-token`**: Рефреш токен
- **`api/v1/event/your`**: Ивенты в городе где ты живешь
- **`/api/v1/events?page=1&limit=5&sort=desc`**: Пагинация и сортировка по рейтингу

## 📝 Deploy

[Deployed here](https://hw5-backend-1.onrender.com/)
