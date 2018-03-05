import './toast.scss';

interface Toast {
  // 显示时间
  duration?: number;
}

/**
 * toast 显示
 * @param {*String} text 要显示的文本内容
 */
const toast = function(text: string, options: Toast = {}) {

  const sToastID = `cyy-toast-${new Date().getTime()}`;

  if (document.getElementById(sToastID)) {
    return false;
  }

  const doc = document.body;
  const toastText = text;

  doc.insertAdjacentHTML(
    'beforeend',
    `<div class='toast' id='${sToastID}'>
                        <div class='toast-wrap'>
                            <div data-id="toast-content" class='toast-content'>${toastText}</div>
                        </div>
                    </div>`
  );

  const oToast = document.getElementById(sToastID);
  const oToastText = oToast.querySelector(
    '[data-id=toast-content]'
  ) as HTMLDivElement;

  oToastText.classList.add('slideInUp', 'animated');

  if (options.duration) {
    oToastText.style.webkitAnimationDuration = options.duration + 's';
  }

  oToastText.addEventListener('webkitAnimationEnd', function() {
    doc.removeChild(oToast);
  });
};

export { toast };
