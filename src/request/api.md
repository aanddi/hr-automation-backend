<h1>Request service</h1>


<br />
<h1>* getAllRequests</h2>

<p>Получение всех запросов</p>
<h3>Request:</h3>

```bash
GET /api/request/all
```

<h3>Response:</h3>
<p>Пример:</p>

```bash
{
    "items": [
        {
            "id": 1,
            "createdAt": "2024-09-15T22:24:29.050Z"
        },
        {
            "id": 2,
            "createdAt": "2024-09-15T22:24:29.050Z"
        }
    ]
}
```


<br />
<h1>* getRequestsById</h2>

<p>Получение запроса по id</p>
<h3>Request:</h3>

```bash
GET /api/request/byId/id
```
<p>id - айди карточки запроса</p>

<h3>Response:</h3>
<p>Пример данных:</p>

```bash
{
    "idRequest": 1,
    "info": {
        "createdAt": "2024-09-15T22:24:29.050Z",
        "urlHh": "url hh",
        "prompt": "java разработчик 5 лет опыта"
    },
    "resumes": [
        {
            "id": 1,
            "idResumeHh": "123sdfswf",
            "urlResume": "url hh",
            "firstName": "Иван",
            "lastName": "Иванов",
            "middleName": "Иванович",
            "age": null,
            "title": "Java Team Lead",
            "totalExperience": 180,
            "scoreball": 85,
            "requestId": 1
        },
    ]
}
```


<br />
<h1>* deleteRequestById</h2>

<p>Удаление запроса по id (каскадное удалиение т.е удаляется запрос и связанные резюме)</p>
<h3>Request:</h3>

```bash
DELETE /api/request/delete/id
```
<p>id - айди карточки запроса</p>

<h3>Response:</h3>
<p>После успешного удаления, возвращается удаленный объект карточки запроса</p>
<p>Пример данных:</p>

```bash
{
    "id": 2,
    "createdAt": "2024-09-16T07:35:55.640Z",
    "urlHh": "https://api.hh.ru/resumes?text=frontend&area=1102",
    "prompt": "Frontend разработчик из Москвы"
}
```


<br />
<h1>* createRequest</h2>

<p>Сохранение уже проанализированных резюме и создание запроса в бд</p>
<h3>Request:</h3>

```bash
dto:
{
    resumes - массив объектов резюме полученный от ассистента (scoreball service) (структура обьекта от hh)
    urlHh - сгенерированная ссылка от gpt
    prompt - запрос от юзера в поисковой строке
}
```
<p>Пример данных:</p>

```bash
{
    "urlHh": "https://api.hh.ru/resumes?text=frontend&area=1102",
    "prompt": "Frontend разработчик из Москвы",
    "resumes": [
        {
            "id": "1dfg23423",
            "firstName": "Иван",
            "lastName": "Иванов",
            "middleName": "Иванович",
            "age": 25,
            "title": "Fontend разработчик",
            "total_experience": {
                "months": 12
            },
            "scoreball": 23
        },
    ]
}
```

<h3>Response:</h3>
<p>После успешного создания получаем id карточки запроса</p>
<p>Пример данных:</p>

```bash
{
    "idRequest": 2
}
```
