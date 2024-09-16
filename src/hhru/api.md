<h1>HHru service</h1>

<h1>searchForUrl</h2>
Документация hh.ru API - https://api.hh.ru/openapi/redoc#tag/Poisk-rezyume


<h2>Request</h2>
<p>Входные данные</p>
<p>В запросе настраиваем per_page и page</p>

```bash
url  - урл для поиска в hh api, url должен быть полноценным с доменном
```

<h2>Response</h2>

<p>items - массив объектов резюме, структуру резюме смотреть или в документации hh api или src/common/mock/resume.mock.ts</p>

```bash
{
  "found": 1,
  "items": [],
  "page": 0,
  "pages": 1,
  "per_page": 20
}
```
