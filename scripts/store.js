tree = {
    id: 1,//id задачи
    leader: 1,
    executor: 1,
    deadline: 12312123, //в мс
    short_desc: "описание",
    dificalty: 2,
    tags: [
        {
            id: 1,
            name: "имя тега"
        }
    ],
    children: [
        {
            id: 2,
            leader: 1,
            executor: 1,
            deadline: 12312123,
            short_desc: "описание",
            dificalty: 1,
            tags: [
                {
                    id: 2,
                    name: "имя тега"
                }
            ],
            children: []
        }
    ]
}