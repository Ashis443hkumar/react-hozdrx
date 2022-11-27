import React from 'react';
import "./style.css"
export default function Processing() {
  return (
    <div className="procesing">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <div class="spinner-border p-5 mb-2  " role="status">
            </div>
            <h4>WebDesign</h4>
          </div>
          <div className="col-md-3">
            <div class="spinner-border p-5 mb-2" role="status">
            </div>
            <h4>Graphic Design</h4>
          </div>
          <div className="col-md-3">
            <div class="spinner-border p-5 mb-2" role="status">
            </div>
            <h4>Mobile Applications</h4>
          </div>
          <div className="col-md-3">
            <div class="spinner-border p-5 mb-2" role="status">
            </div>
            <h4>Search Engine Optimization</h4>
          </div>

        </div>
      </div>
    </div>
  );
}
