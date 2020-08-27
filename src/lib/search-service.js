export const search = async (url, query, fields = null) => {
  try {
    const queryContent = fields ? {query_string: {query, fields}} : {query_string: {query}}
    const queryBody = {
      query: queryContent
    };

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queryBody)
    });
    response = await response.json();
    // No analyse for now
    return response.hits.hits.map(({_source}) => _source);
  } catch (e) {
    console.log(`An error occurred when trying to fetch data from the index with message ${e.message || e}`);
    throw e;
  }
}
