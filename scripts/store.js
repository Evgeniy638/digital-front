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
            children: [
                {
                    id: 10,
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
                },
                {
                    id: 11,
                    leader: 1,
                    executor: 1,
                    deadline: 12312123,
                    short_desc: "описание1111",
                    dificalty: 1,
                    tags: [
                        {
                            id: 2,
                            name: "имя тега"
                        }
                    ],
                    children: [
                        {
                            id: 12,
                            leader: 1,
                            executor: 1,
                            deadline: 12312123,
                            short_desc: "описание1111",
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
            ]
        },

        {
            id: 6,
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
        },

        {
            id: 3,
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
            children: [
                {
                    id: 4,
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
                    children: [
                        {
                            id: 5,
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
                        },
                        {
                            id: 7,
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
                        },
                        {
                            id: 8,
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
            ]
        }

    ]
}