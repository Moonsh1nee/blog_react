import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    posts: [
        {
            "id": uuidv4(),
            "title": "Путешествие по Японии: Киото",
            "image": "/blog_react/static/images/kyoto.jpg",
            "imageWebp": "/blog_react/static/images/kyoto.webp",
            "excerpt": "Узнайте о невероятных местах Киото, древней столицы Японии, с её храмами, садами и традиционной культурой.",
            "content": "Киото, одна из самых красивых и культурно богатых областей Японии, представляет собой сочетание традиций и современности. Начните своё путешествие с посещения храма Кинкакудзи, также известного как Золотой Павильон, где вы сможете насладиться уникальной архитектурой и красивыми видами на озеро. Затем отправляйтесь к знаменитому бамбуковому лесу в районе Арасияма. Не пропустите прогулку по улице Фусими Инари с её тысячами торий. Киото также славится своей кулинарией: обязательно попробуйте традиционный кайсэки-обед и местные сладости.",
            "tags": ["Япония", "Путешествия", "Киото", "Традиции", "Культура"],
            "createdAt": new Date(2024, 10, 11).toISOString(),
            "popularity": 30
        },
        {
            "id": uuidv4(),
            "title": "10 лучших книг для саморазвития",
            "image": "/blog_react/static/images/books.jpg",
            "imageWebp": "/blog_react/static/images/books.webp",
            "excerpt": "Откройте для себя 10 книг, которые помогут вам развиваться как личность и достигать новых высот.",
            "content": "Саморазвитие является ключом к успеху в любой сфере жизни. Вот 10 книг, которые помогут вам на этом пути:\n\n1. \"7 навыков высокоэффективных людей\" — Стивен Кови.\n2. \"Думай и богатей\" — Наполеон Хилл.\n3. \"Магия утра\" — Хэл Элрод.\n4. \"Атлант расправил плечи\" — Айн Рэнд.\n5. \"Сила подсознания\" — Джозеф Мерфи.\n6. \"Как завоёвывать друзей и оказывать влияние на людей\" — Дейл Карнеги.\n7. \"Великие секреты мира\" — Ронда Берн.\n8. \"Ты можешь всё!\" — Джефф Келлер.\n9. \"Не сдавайся!\" — Джон С. Максвелл.\n10. \"Гибкое сознание\" — Кэрол Дуэк.\n\nКаждая из этих книг предлагает ценные советы и методы, которые помогут вам улучшить свою жизнь и развивать необходимые навыки.",
            "tags": ["Книги", "Саморазвитие", "Образование", "Литература", "Советы"],
            "createdAt": new Date(2024, 10, 19).toISOString(),
            "popularity": 50
        },
        {
            "id": uuidv4(),
            "title": "Вкусное и полезное: рецепты здорового питания",
            "image": "/blog_react/static/images/receipt.jpeg",
            "imageWebp": "/blog_react/static/images/receipt.webp",
            "excerpt": "Погрузитесь в мир здорового питания с нашими вкусными и питательными рецептами, которые помогут вам оставаться в форме.",
            "content": "Поддерживать здоровый образ жизни не так сложно, как может показаться. Вот несколько рецептов, которые помогут вам начать:\n\n1. **Салат с киноа и авокадо**: Сочетание киноа, свежих овощей и авокадо создаёт вкусный и питательный салат. Добавьте лимонный сок и оливковое масло для заправки.\n2. **Куриные грудки на гриле с овощами**: Приготовьте куриные грудки на гриле и подавайте с гарниром из свежих овощей, таких как брокколи, морковь и цветная капуста.\n3. **Смузи с ягодами и шпинатом**: Смешайте ягоды (черника, клубника), шпинат, банан и немного миндального молока для создания освежающего и питательного смузи.\n\nЭти рецепты легко приготовить и они помогут вам чувствовать себя энергичными и здоровыми.",
            "tags": ["Здоровье", "Питание", "Рецепты", "ЗдоровоеПитание", "Фитнес"],
            "createdAt": new Date(2024, 10, 10).toISOString(),
            "popularity": 10
        }
    ],
    filter: {
        tag: ''
    },
    sort: {
        sortBy: 'createdAt',
        sortOrder: 'desc'
    }
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({ ...action.payload, id: uuidv4(), popularity: 0 });
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        setFilterTag: (state, action) => {
            state.filter.tag = action.payload;
        },
        setSortBy: (state, action) => {
            state.sort.sortBy = action.payload;
        },
        setSortOrder: (state, action) => {
            state.sort.sortOrder = action.payload;
        },
        increaseRating: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload);
            post.popularity++;
        },
        decreaseRating: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload);
            post.popularity--;
        }
    },
});

export const { addPost, removePost, setFilterTag, setSortBy, setSortOrder, decreaseRating, increaseRating } = postsSlice.actions;
export default postsSlice.reducer;
