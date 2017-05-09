import $ from 'jquery';

export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/page/' + title)
      .then(data => dispatch({
        type: 'update-content',
        content: data.content
      }))
  };
  return asyncAction;
}
