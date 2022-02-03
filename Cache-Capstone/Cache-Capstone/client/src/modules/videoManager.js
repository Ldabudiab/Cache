import { getToken } from "./authManager";

const baseUrl = '/api/video';

export const getAllVideos = () => {
    return getToken().then(token => {
        return fetch(`${baseUrl}/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json())
    })
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const addVideo = (video) => {
    return getToken().then(token => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
    })};
