import {v1} from "uuid";


export const quizData = [{
    repair: [

        {
            id: 0,
            title: 'Где планируете делать ремонт?',
            values: [{id: v1(), value: "Новостройка", img: ''},
                {id: v1(), value: "Квартира", img: ''},
                {id: v1(), value: "Дом", img: ''},
                {id: v1(), value: "Коммерческий объект", img: ''}]
        },
        {
            id: 1,
            title: 'Какой вид ремонта вас интересует??',
            values: [{id: v1(), value: "Капитальный"},
                {id: v1(), value: "Косметический"},
                {id: v1(), value: "Дизайнерский"},]
        },
        {
            id: 2,
            title: 'Укажите общую площадь, м2?',
            values: [{id: v1(), value: 0, img: ''},]

        },
        {
            id: 3,
            title: 'Есть ли у вас дизайн проект?',
            values: [{id: v1(), value: "Да", img: ''},
                {id: v1(), value: "Есть понимание какой ремонт я хочу", img: ''},
                {id: v1(), value: "Готов(а) к вашим предложениям", img: ''},
            ]

        },
        {
            id: 4,
            title: 'Когда вы планируете начать ремонт?',
            values: [{id: v1(), value: "Ближайшие 2 недели", img: ''},
                {id: v1(), value: "В течение месяца", img: ''},
                {id: v1(), value: "Через месяц и более", img: ''},
            ]

        },

    ]
}
]