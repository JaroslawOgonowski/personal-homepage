import axios from "axios";

export const getRepo = () => {
    axios.get("https://api.github.com/users/JaroslawOgonowski/repos?sort=created&direction=desc")
    .then(response=>response.data);
}