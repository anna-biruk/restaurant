export default class RestoService {
    _apiBase = process.env.REACT_APP_API_BASE || window.location.origin.replace('3001', '3000');

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`);
        }
        return await res.json()
    }

    async getMenuItems() {
        return await this.getResource(`/api/menu/?limit=100`)
    }

    async createOrder(order) {
        const response = await fetch(`${this._apiBase}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        return await response.json();
    };

    async createMenu(menuItem) {
        const response = await fetch(`${this._apiBase}/api/menu`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(menuItem)
        });
        return await response.json();
    }

    async getOrders() {
        return await this.getResource(`/api/order/?limit=10`)
    }

    async signIn(credentials) {
        const response = await fetch(`${this._apiBase}/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            const {message} = await response.json();
            throw Error(message)
        }

        return await response.json();
    }
}