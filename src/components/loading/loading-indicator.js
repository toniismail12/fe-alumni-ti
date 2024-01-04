import { createRoot } from 'react-dom';
import Loading from './loading';

let isLoading = false;

export function ShowLoading() {
  if (!isLoading) {
    isLoading = true;
    const loadingElement = <Loading />;
    const container = document.createElement('div');
    container.setAttribute('id', 'loading-container');
    document.body.appendChild(container);
    
    const root = createRoot(container);
    root.render(loadingElement);
  }
}

export function HideLoading() {
  if (isLoading) {
    isLoading = false;
    const container = document.getElementById('loading-container');
    const root = createRoot(container);
    root.unmount();
    container.remove();
  }
}

export default ShowLoading;
