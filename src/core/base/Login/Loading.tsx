import { useEffect } from 'react';
import './Loading.less';
const Loading = () => {
  useEffect(() => {
    const spinner = document.querySelector('.js-spinner') as HTMLDivElement;
    const spinnerClass = spinner.getAttribute('class');
    setTimeout(function () {
      if (spinnerClass) {
        spinner.setAttribute('class', `${spinnerClass} state-show state-away`);
      } else {
        spinner.setAttribute('class', `state-show state-away`);
      }
    }, 1500);
    // spinner.style.display = 'none';
    setTimeout(function () {
      spinner.remove();
      window.localStorage.setItem('loading', 'false');
    }, 3000);
  }, []);

  return (
    <div className="state-spinner-fixed">
      <div className="page_wrapper js-wrapper">
        <div className="spinner js-spinner">
          <div className="spinner__overlay">
            <div className="spinner__big_circle"></div>
            <div className="spinner__all_circles_box">
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--1"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--2"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--3"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--4"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--5"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--6"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--7"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--8"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--9"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--10"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--11"></div>
              </div>
              <div className="spinner__circles_box">
                <div className="spinner__circle spinner__circle--12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
