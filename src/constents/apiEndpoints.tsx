const apiEndpoints = {
  sampleData: (page: number, perPage: number) =>
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${perPage}`,
};

export default apiEndpoints;
