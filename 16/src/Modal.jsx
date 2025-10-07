import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Modal = ({ isOpen, children }) => (
    <div
        className={cn('modal', { fade: isOpen, show: isOpen })}
        style={{ display: isOpen ? 'block' : 'none' }}
        role="dialog"
    >
        <div className="modal-dialog">
            <div className="modal-content">{children}</div>
        </div>
    </div>
);

const Header = ({ toggle, children }) => (
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
        ></button>
    </div>
);

const Body = ({ children }) => <div className="modal-body">{children}</div>;

const Footer = ({ children }) => <div className="modal-footer">{children}</div>;

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
// END
