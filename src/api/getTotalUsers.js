// api/getTotalUsers.js

import axios from 'axios';

const getTotalUsers = async () => {
    const users = await axios.get(
        `https://dummyjson.com/users`
    );

    return users.data.total;
};

export default getTotalUsers;