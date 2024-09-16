<h1>HHru service</h1>

<br />
<h1>* searchForUrl</h2>
<p>Документация hh.ru API - https://api.hh.ru/openapi/redoc#tag/Poisk-rezyume</p>
<p>Запрос не пройдет без HHRU_API_ACCESS_TOKEN юзера</p>

<h3>Request</h3>

```bash
{
    url  - урл для поиска в hh api, url должен быть полноценным с доменном
}
```

<h3>Response</h3>

```bash
{
  "found": 11317,
  "pages": 833,
  "page": 1,
  "per_page": 6
  "items": [
             {
                  "last_name": "Имя",
                  "first_name": null,
                  "middle_name": null,
                  "title": "Начинающий специалист",
                  "created_at": "2024-09-13T13:09:10+0300",
                  "updated_at": "2024-09-13T13:10:06+0300",
                  "area": {
                      "id": "3",
                      "name": "Екатеринбург",
                      "url": "https://api.hh.ru/areas/3"
                  },
                  "age": null,
                  "gender": {
                      "id": "male",
                      "name": "Мужской"
                  },
                  "salary": {
                      "amount": 65000,
                      "currency": "RUR"
                  },
                  "photo": null,
                  "total_experience": null,
                  "certificate": [],
                  "owner": {
                      "id": "147372342342432345614",
                      "comments": {
                          "url": "https://api.hh.ru/resumes/....",
                          "counters": {
                              "total": 0
                          }
                      }
                  },
                  "can_view_full_info": false,
                  "negotiations_history": {
                      "url": "https://api.hh.ru/resumes/...."
                  },
                  "hidden_fields": [],
                  "actions": {
                      "download": {
                          "pdf": {
                              "url": "https://api.hh.ru/resumes/...."
                          },
                          "rtf": {
                              "url": "https://api.hh.ru/resumes/...."
                          }
                      },
                      "get_with_contact": {
                          "url": "https://api.hh.ru/resumes/...."
                      },
                      "download_with_contact": {
                          "pdf": {
                              "url": "https://api.hh.ru/resumes/...."
                          },
                          "rtf": {
                              "url": "https://api.hh.ru/resumes/...."
                          }
                      }
                  },
                  "url": "https://api.hh.ru/resumes/....",
                  "alternate_url": "https://api.hh.ru/resumes/....",
                  "id": "12sdf324sdf",
                  "download": {
                      "pdf": {
                          "url": "https://api.hh.ru/resumes/...."
                      },
                      "rtf": {
                          "url": "https://api.hh.ru/resumes/...."
                      }
                  },
                  "platform": {
                      "id": "headhunter"
                  },
                  "education": {
                      "level": {
                          "id": "secondary",
                          "name": "Среднее"
                      },
                      "primary": []
                  },
                  "experience": [],
                  "favorited": false,
                  "viewed": false,
                  "marked": false,
                  "last_negotiation": null
          }
        ],
}
```
