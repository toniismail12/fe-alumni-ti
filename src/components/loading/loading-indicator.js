import ReactDOM from 'react-dom';
import Loading from './loading';

let isLoading = false;

export function ShowLoading() {
  if (!isLoading) {
    isLoading = true;
    const loadingElement = <Loading />;
    const container = document.createElement('div');
    container.setAttribute('id', 'loading-container');
    document.body.appendChild(container);
    ReactDOM.render(loadingElement, container);
  }
}

export function HideLoading() {
  if (isLoading) {
    isLoading = false;
    const container = document.getElementById('loading-container');
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  }
}

export default ShowLoading;
