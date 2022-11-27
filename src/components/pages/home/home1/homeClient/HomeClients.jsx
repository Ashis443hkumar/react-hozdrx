import React from 'react';
import SubHeading from '../../../../common/subHeading/SubHeading';
import './style.css'

export default function HomeClients() {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <SubHeading title="Why Choose Us?" />
            <div className="client mt-4">
              <p>
                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor
                sit amet, consec adipiscing elit. Maecenas sed diam eget risus
                varius bland sit amet non fringilla ullamcorper magna. Nulla eu
                mi magna. Etiam suscipit commodo ad gravida.
              </p>
              <ul>
                <li>Donec convallis, metus nec tempus aliquet</li>
                <li>Aenean commodo ligula eget dolor</li>
                <li>Cum sociis natoque penatibus mag ipsum</li>
                <li>Lorem ipsum dolor sit amet cons adipiscing</li>
                <li>Accumsan vulputate faucibus turpis dictum</li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6">
            <SubHeading title="What Client's Say" />
            <div class="clientsay ">
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '20rem' }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <p> 70% <span>SYSTEM DESIGN ..9</span>  </p>
                </div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '40rem' }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  
                  <p>
                    70% <span> DATA ANALYSIS</span>
                  </p>
                </div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '60rem' }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '25rem' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '25rem' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
