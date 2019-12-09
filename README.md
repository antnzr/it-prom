### Задача
Разработать web-приложение, содержащее три справочника: профессии, отделы, сотрудники.
Каждый справочник должен содержать операции создания, редактирования, удаления
соответствующей сущности.

### Описание сущностей
1. Профессия содержит поля Наименование, Примечание;
2. Отдел содержит поля Наименование, Примечание, Родительский отдел. Т.е. у отделов может
быть иерархия.
3. Сотрудники содержит поля ФИО, Профессия, Отдел, Примечание

### Используемые технологии
1. Spring Boot;
2. БД H2 embedded;
3. JQuery или Knockout;
4. Unit-тесты на Junit5;
5. Использовать CSS-framework Bootstrap 4 или другой современный;
Проект разместить на GitHub или Bitbucket.

для запуска: клонировать и запустить.