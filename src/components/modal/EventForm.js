import React from "react";

const EventForm = () => {
  return (
    <div
      id="create-event"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Event Form
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Event Title
                </label>
                <input
                  type="text"
                  nama="event-title"
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  nama="checkbox"
                  placeholder="Enter Title"
                  className="form-check-input"
                />
                <label htmlFor="" className="form-label">
                  All-day Event?(Optional)
                </label>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Start
                    </label>
                    <input
                      type="date"
                      name="date-start"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      End
                    </label>
                    <input
                      type="date"
                      name="date-end"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Choose Event Color
                </label>
                <select name="" id="" className="form-control">
                  <option value="">Select Color</option>
                  <option value="">Primary</option>
                  <option value="">Success</option>
                  <option value="">Danger</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
