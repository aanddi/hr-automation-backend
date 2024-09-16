## Установка

```bash
$ yarn install
```

## Запуск приложения

### 1) Генерация [Prisma Clients](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/instantiate-prisma-client)

```bash
$ npx prisma generate
```

#### Синхронизация с базой данных
<ins><strong>В случае изменении файла prisma/schema.prisma</strong></ins>, то изменения нужно запушить в бд (данное изменение может стереть все данные из бд)
```bash
$ npx prisma db push
```


### 2) Запуск

```bash
$ yarn run start:dev
```

## Переменные окружения

```bash
OPENAI_API_TOKEN=**********

OPENAI_ASSISTANT_SEARCH_ID=**********
OPENAI_ASSISTANT_SCOREBALL_ID=**********

HHRU_API_ACCESS_TOKEN=**********

DATABASE_URL=**********
```



