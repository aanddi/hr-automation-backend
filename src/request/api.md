<h1>Request service</h1>

<h1>* getAllRequests</h2>
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

<h1>* getRequestsById</h2>
<h3>Request:</h3>

<p>id - айди карточки запроса</p>

```bash
GET /api/request/byId/id
```

<h3>Response:</h3>
<p>Пример:</p>

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

<h1>* deleteRequestById</h2>
<h3>Request:</h3>

<p>id - айди карточки запроса</p>

```bash
DELETE /api/request/delete/id
```
