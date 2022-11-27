import React from 'react';

export default function Prograssing() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <h4>Progress Bars</h4>
          <hr/>
          <div className="col-md-6">
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style={{ width: '25' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress mt-3">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-4">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style={{ width: '100%' }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div class="progress mt-3">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '75%' }}
              ></div>
            </div>

            <div class="progress my-3">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: '10%' }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-3">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: '25%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-3">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
         
           <div class="progress my-3 ">
              <div class="progress-bar py-2" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
               aria-valuemin="0" aria-valuemax="100">HTML 50%</div>
           </div>
           <div class="progress my-3">
              <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90"
               aria-valuemin="0" aria-valuemax="100">Javascript</div>
           </div>
           <div class="progress my-3">
              <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
               aria-valuemin="0" aria-valuemax="100">MySqol</div>
           </div>
           <div class="progress my-3">
              <div class="progress-bar " role="progressbar" style={{width: "50%"}} aria-valuenow="50"
               aria-valuemin="0" aria-valuemax="100">ReactJs</div>
           </div>
           <div class="progress my-3">
              <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
               aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
           </div>

          </div>
        </div>
      </div>
    </div>
  );
}
