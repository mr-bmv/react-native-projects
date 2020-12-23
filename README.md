-  add in description of user information about group
-  remove `theme` like parameter from some components and start use `state.theme`

## multi adding

add user to some groups at the sme time


```json
{
    "darkTheme": true,
    "error": false,
    "friends": {
        "05f40499-529a-4808-a663-13a4af083ab0": {
            "address": "Germany Herbolzheim",
            "age": 63,
            "city": "Herbolzheim",
            "country": "Germany",
            "email": "emanuel.rosendahl@example.com",
            "gender": "male",
            "id": "05f40499-529a-4808-a663-13a4af083ab0",
            "img": {
                "large": "https://randomuser.me/api/portraits/men/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
            },
            "name": "Emanuel Rosendahl",
            "nationality": "DE",
            "phone": "0175-4714481",
            "title": "Mr",
            "username": "silverswan190"
        },
        "4811d90a-4621-4180-a24c-c878f43ab3a7": {
            "address": "Turkey Kastamonu",
            "age": 28,
            "city": "Kastamonu",
            "country": "Turkey",
            "email": "esma.ertepinar@example.com",
            "gender": "female",
            "id": "4811d90a-4621-4180-a24c-c878f43ab3a7",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/50.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
            },
            "name": "Esma Ertepınar",
            "nationality": "TR",
            "phone": "(665)-054-3320",
            "title": "Ms",
            "username": "redzebra512"
        },
        "72a0208a-389f-49e8-b2c9-d7cd0c34b6fd": {
            "address": "France Le Mans",
            "age": 68,
            "city": "Le Mans",
            "country": "France",
            "email": "olivia.berger@example.com",
            "gender": "female",
            "id": "72a0208a-389f-49e8-b2c9-d7cd0c34b6fd",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/6.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            "name": "Olivia Berger",
            "nationality": "FR",
            "phone": "06-59-32-67-26",
            "title": "Ms",
            "username": "redelephant448"
        },
        "7eeb98e0-c642-461e-9628-898fdddd3ddf": {
            "address": "United States Tucson",
            "age": 46,
            "city": "Tucson",
            "country": "United States",
            "email": "julie.wade@example.com",
            "gender": "female",
            "id": "7eeb98e0-c642-461e-9628-898fdddd3ddf",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/80.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
            },
            "name": "Julie Wade",
            "nationality": "US",
            "phone": "(160)-105-6255",
            "title": "Ms",
            "username": "lazylion650"
        },
        "86c177d2-144c-47bc-94bf-9ced10af57b0": {
            "address": "Iran قرچک",
            "age": 55,
            "city": "قرچک",
            "country": "Iran",
            "email": "mrym.zraay@example.com",
            "gender": "female",
            "id": "86c177d2-144c-47bc-94bf-9ced10af57b0",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/63.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/63.jpg",
            },
            "name": "مریم زارعی",
            "nationality": "IR",
            "phone": "0990-530-7444",
            "title": "Mrs",
            "username": "purplepeacock948"
        },
    },
    "groups": {
        "College": [
            "72a0208a-389f-49e8-b2c9-d7cd0c34b6fd",
            "4811d90a-4621-4180-a24c-c878f43ab3a7",
            "05f40499-529a-4808-a663-13a4af083ab0",
            "86c177d2-144c-47bc-94bf-9ced10af57b0"
        ],
        "School": [
            "7eeb98e0-c642-461e-9628-898fdddd3ddf",
            "4811d90a-4621-4180-a24c-c878f43ab3a7"
        ]
    },
    "loading": false,
    "users": [
        {
            "address": "United States Tucson",
            "age": 46,
            "city": "Tucson",
            "country": "United States",
            "email": "julie.wade@example.com",
            "gender": "female",
            "id": "7eeb98e0-c642-461e-9628-898fdddd3ddf",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/80.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/80.jpg",
            },
            "name": "Julie Wade",
            "nationality": "US",
            "phone": "(160)-105-6255",
            "title": "Ms",
            "username": "lazylion650"
        },
        {
            "address": "France Le Mans",
            "age": 68,
            "city": "Le Mans",
            "country": "France",
            "email": "olivia.berger@example.com",
            "gender": "female",
            "id": "72a0208a-389f-49e8-b2c9-d7cd0c34b6fd",
            "img": {
                "large": "https://randomuser.me/api/portraits/women/6.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
                "small": "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            },
            "name": "Olivia Berger",
            "nationality": "FR",
            "phone": "06-59-32-67-26",
            "title": "Ms",
            "username": "redelephant448"
        }
    ]
}
```