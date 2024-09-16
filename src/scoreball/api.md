<h1>Scoreball service</h1>


<br />
<h1>* createScoreball</h2>
<p>ИИ анализирует каждое резюме по отдельности и проставляет свой scoreball. На входе ассистент получает id ассистента и резюме (см. в gpt service => Assistant). Резюме соотвествует структуре hh резюме (src/common/mock/resume.mock.ts). После анализа всех резюме сервис сохраняет проанализированные резюме в бд (см. в request service => createRequests)</p>


<h3>Request:</h3>

```bash
POST /api/scoreball
```

```bash
dto:
{
    resumes - массив объектов резюме (структура резюме - обьект от hh см. src/common/mock/resume.mock.ts)
    urlHhRuApi - сгенерированная ссылка от gpt
    prompt - запрос от юзера в поисковой строке
}
```
<p>Пример данных:</p>

```bash
{
    "urlHhRuApi": "https://api.hh.ru/resumes?key_skills=React&professional_roles=96",
    "prompt": "промпт",
    "resumes": [
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
    ]
}
```

<h3>Response:</h3>
<p>После успешного анализа и создания карточки запроса - получаем id карточки запроса</p>
<p>Пример:</p>

```bash
{
    "idRequest": 2
}
```
