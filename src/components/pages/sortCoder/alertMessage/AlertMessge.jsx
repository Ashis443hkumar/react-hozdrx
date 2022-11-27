import React from 'react';

export default function AlertMessage() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <h4>Alert Messages</h4>
          <hr/>
          <div className="col-md-6">
            <div class="alert alert-primary p-2" role="alert">
              A simple primary alert—check it out!
            </div>
            <div class="alert alert-secondary p-2" role="alert">
              A simple secondary alert—check it out!
            </div>
            <div class="alert alert-success p-2" role="alert">
              A simple success alert—check it out!
            </div>
            <div class="alert alert-danger p-2" role="alert">
              A simple danger alert—check it out!
            </div>
            <div class="alert alert-warning p-2" role="alert">
              A simple warning alert—check it out!
            </div>
          </div>
          
          <div className="col-md-6">
            <div
              class="alert alert-warning alert-dismissible fade show p-2"
              role="alert"
            >
              <strong> Well done!</strong> You message goes here.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="alert alert-dark alert-dismissible fade show p-2
              "
              role="alert"
            >
              <strong> Well done!</strong> You message goes here.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="alert alert-danger alert-dismissible fade show p-2
              "
              role="alert"
            >
              <strong> Well done!</strong> You message goes here.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="alert alert-success alert-dismissible fade show p-2
              "
              role="alert"
            >
              <strong> Well done!</strong> You message goes here.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="alert alert-primary alert-dismissible fade show p-2
              "
              role="alert"
            >
              <strong> Well done!</strong> You message goes here.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
