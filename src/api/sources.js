import axios from '../axios';

const sourcesApi = {
  async getSources() {
    try {
      return await axios.get(`/sources`);
    } catch (e) {
      return e.response;
    }
  },

  async topHeadlines() {
    try {
      return await axios.get(`/top_news`);
    } catch (e) {
      return e.response;
    }
  },

  async getNewsBySource(source) {
    try {
      return await axios.get(`/${source}`);
    } catch (e) {
      return e.response;
    }
  },

  async createSource() {
    try {
      return await axios.post(`/sources/scrape`);
    } catch (e) {
      return e.response;
    }
  },
};

export default sourcesApi;
