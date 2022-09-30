import axios from "axios";

const KEY = "AIzaSyBgdtlO3Px8PhuVMKKYrw-SMhsVnNoGt_k";

const Youtube = axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part : "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
export default Youtube