import { faCircleCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CopyToast() {
  return (
    <div className="fixed top-0 right-0">
      <div
        className="flex items-center p-4 mx-4 mt-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <span className="fa-stack">
          <FontAwesomeIcon icon={faSquare} style={{ color: '#e3f6ec' }} className="fa-stack-2x" />
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: '#489c72' }}
            className="fa-stack-1x"
          />
        </span>

        <div className="ml-3 text-sm font-normal">Email copied successfully.</div>
      </div>
    </div>
  );
}
