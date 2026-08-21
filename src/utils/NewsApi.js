import {
  NEWS_API_BASE_URL,
  NEWS_API_PAGE_SIZE,
  NEWS_SEARCH_DAYS,
} from './constants';

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getDateRange() {
  const to = new Date();
  const from = new Date();

  from.setDate(to.getDate() - NEWS_SEARCH_DAYS);

  return {
    from: formatDate(from),
    to: formatDate(to),
  };
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Erro na solicitação: ${res.status}`));
}

export function getNews(keyword) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const { from, to } = getDateRange();

  if (!apiKey) {
    return Promise.reject(
      new Error('A chave da News API não foi configurada.'),
    );
  }

  const params = new URLSearchParams({
    q: keyword,
    apiKey,
    from,
    to,
    pageSize: String(NEWS_API_PAGE_SIZE),
  });

  return fetch(`${NEWS_API_BASE_URL}/everything?${params.toString()}`).then(
    checkResponse,
  );
}
