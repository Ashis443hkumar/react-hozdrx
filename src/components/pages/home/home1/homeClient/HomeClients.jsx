import React from 'react';
import SubHeading from '../../../../common/subHeading/SubHeading';
import './style.css';

export default function HomeClients() {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <SubHeading title="Why Choose Us?" />

            <div className="clienttt mt-4">
              <p>
                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor
                sit amet, consec adipiscing elit. Maecenas sed diam eget risus
                varius bland sit amet non fringilla ullamcorper magna. Nulla eu
                mi magna. Etiam suscipit commodo ad gravida.
              </p>
              <ul className="ullist">
                <li><i class="fa-solid fa-angle-right"></i> Donec convallis, metus nec tempus aliquet</li>
                <li> <i class="fa-solid fa-angle-right"></i> Aenean commodo ligula eget dolor</li>
                <li> <i class="fa-solid fa-angle-right"></i> Cum sociis natoque penatibus mag ipsum</li>
                <li> <i class="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit amet cons adipiscing</li>
                <li> <i class="fa-solid fa-angle-right"></i> Accumsan vulputate faucibus turpis dictum</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <SubHeading title="What Client's Say" />
            <div className="clientsay ">
           

              <div class="progress" >
                <div
                  class="progress-bar py-3"
                  role="progressbar"
                  style={{width: "25rem"}}
                  aria-valuenow="25"
                  aria-valuemin="30"
                  aria-valuemax="100"
                >
                  <p class=""> <span>70%</span> javascript </p>
                </div>
              </div>
              <div class="progress my-4" >
                <div
                  class="progress-bar py-3"
                  role="progressbar"
                  style={{width: "25rem"}}
                  aria-valuenow="25"
                  aria-valuemin="30"
                  aria-valuemax="100"
                >
                  <p class=""> <span>70%</span> javascript </p>
                </div>
              </div>
              <div class="progress my-4" >
                <div
                  class="progress-bar py-3"
                  role="progressbar"
                  style={{width: "25rem"}}
                  aria-valuenow="25"
                  aria-valuemin="30"
                  aria-valuemax="100"
                >
                  <p class=""> <span>70%</span> javascript </p>
                </div>
              </div>
              <div class="progress my-4" >
                <div
                  class="progress-bar py-3"
                  role="progressbar"
                  style={{width: "25rem"}}
                  aria-valuenow="25"
                  aria-valuemin="30"
                  aria-valuemax="100"
                >
                  <p class=""> <span>70%</span> javascript </p>
                </div>
              </div>
              <div class="progress my-4" >
                <div
                  class="progress-bar py-3"
                  role="progressbar"
                  style={{width: "25rem"}}
                  aria-valuenow="25"
                  aria-valuemin="30"
                  aria-valuemax="100"
                >
                  <p class=""> <span>70%</span> javascript </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
