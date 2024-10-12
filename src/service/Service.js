export const token =
  'BQAroXbWyE8mRlLxW1YeGGjHybtFHkhUSnk-hNF8iRIW1phIHWQ3R5YuG4aAZyrIOZCMWmcKzSJLh3_2rgm9J1l5blyFg2wh9QY3H3VKy70AWiGdztDFvwtOXDlb1wo8ZSv4E9hxaRYpvj_IGxnAOgyzEztpxQvZ0ZJ4RjJlmJXUJV5x27lGtMH3ZhCcGgFiuntpot-HIK1s_BOtZDKQ3uoAHozxtw1leA_SF4QLJr_07BBETaMuN4fYL7IMUqeH_FlC1It2aZgE2O2gcx-amanzMGO8EgEfFcKxyNkYoL7m6DsCSIAp3SLaEZGXZ-dE8w';

export function makeHTTPRequest(url, request, success, failure) {
  fetch(url, request)
    .then(res => res.json())
    .then(res => success(res))
    .catch(err => failure(err.message));
}
