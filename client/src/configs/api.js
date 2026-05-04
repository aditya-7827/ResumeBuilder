import axios from 'axios'

const api = axios.create({
    baseURL: "https://resumebuilder-server-tmfc.onrender.com"
})

export default api