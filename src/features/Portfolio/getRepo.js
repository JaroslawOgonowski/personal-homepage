import axios from "axios";

export const getRepo = () =>
    axios.get("https://api.github.com/users/JaroslawOgonowski/repos")
        .then((response) => response.data);
