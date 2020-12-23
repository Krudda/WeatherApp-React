import { keys } from '../data/apiKeys';

const key = keys.imageKEY;

async function getMainBackground() {
    const now = new Date().getHours();
    const search = (now > 19 || now < 9) ? 'night' : 'day';
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=summer nature ${search}&client_id=${key}`;

    console.log('search', search)
    const defaultBGImageURL = 'https://images.unsplash.com/photo-1563823856120-88d1fe6b75bc?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9';
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const backgroundImageURL = data.urls.regular;
        return backgroundImageURL
    } catch (err) {
        return defaultBGImageURL
    }
};

export default getMainBackground;